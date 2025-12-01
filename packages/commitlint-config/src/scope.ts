import { basename, dirname, resolve } from "node:path";
import { existsSync, readFileSync } from "node:fs";
import { parseJSON, parseYAML } from "confbox";
import type { ScopesTypeItem } from "./types/types";
import { default as consola } from "consola";
import { execSync } from "node:child_process";
import { default as fg } from "fast-glob";
import { uniq } from "es-toolkit/array";

function getScopes(): ScopesTypeItem[] {
  let scopes: ScopesTypeItem[] = [];

  const path = resolve(process.cwd(), "pnpm-workspace.yaml");
  if (!existsSync(path)) {
    return scopes;
  }

  const { packages } = parseYAML<{ packages: string[] }>(
    readFileSync(path, "utf8")
  );

  const patterns = packages.map((pattern) =>
    pattern.replace(/\/?$/, "/package.json")
  );

  patterns.forEach((pattern) => {
    const filepaths = fg.sync(pattern, {
      cwd: process.cwd(),
      ignore: ["**/node_modules/**", "**/bower_components/**"],
    });

    filepaths.forEach((filepath) => {
      const { description } = parseJSON<{ description: string }>(
        readFileSync(filepath, "utf8")
      );
      scopes.push({
        value: basename(dirname(filepath)),
        name: `${dirname(filepath)}: ${description}`,
      });
    });
  });

  return scopes;
}

export const scopes: ScopesTypeItem[] = getScopes();

function getDefaultScope(): string[] {
  let defaultScopes: string[] = [];

  const files = execSync("git status --porcelain || true")
    .toString()
    .split("\n")
    .filter((line) => line.length > 0 && line[0] !== " ")
    .map((line) => line.slice(3).trim());
  consola.log(`本次提交涉及文件：\n${files.join("\n")}`);

  const dirnames = uniq(files.map((file) => dirname(file)));

  scopes
    .filter((scope) => {
      const { name } = scope;
      const pkgname = name.slice(0, name.indexOf(":"));
      return dirnames.some((dirname) => dirname.startsWith(pkgname));
    })
    .forEach((scope) => {
      defaultScopes.push(scope.value);
    });
  consola.log(`本次提交涉及范围：\n${defaultScopes.join("\n")}`);

  return defaultScopes;
}

export const defaultScopes: string[] = getDefaultScope();
