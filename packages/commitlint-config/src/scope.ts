import type { ScopesTypeItem } from "./types/types";
import { resolve, basename, dirname } from "node:path";
import { existsSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { parseYAML, parseJSON } from "confbox";
import fg from "fast-glob";
import consola from "consola";

function normalizePatterns(patterns: string[]): string[] {
  return patterns.map((pattern) => {
    return pattern.replace(/\/?$/, "/package.json");
  });
}

function getScopes() {
  let scopes: ScopesTypeItem[] = [];

  const path = resolve(process.cwd(), "pnpm-workspace.yaml");
  if (!existsSync(path)) {
    return scopes;
  }

  const { packages } = parseYAML<{ packages: string[] }>(
    readFileSync(path, "utf-8")
  );

  const patterns = normalizePatterns(packages);

  patterns.forEach((pattern) => {
    const filepaths = fg.sync(pattern, {
      cwd: process.cwd(),
      ignore: ["**/node_modules/**", "**/bower_components/**"],
    });

    filepaths.forEach((filepath) => {
      const { description } = parseJSON<{ description: string }>(
        readFileSync(filepath, "utf-8")
      );
      scopes.push({
        value: basename(dirname(filepath)),
        name: dirname(filepath) + ": " + description,
      });
    });
  });

  return scopes;
}

export const scopes: ScopesTypeItem[] = getScopes();

function getDefaultScope() {
  let defaultScopes: string[] = [];

  const files = execSync("git status --porcelain || true")
    .toString()
    .split("\n")
    .filter((line) => line.length > 0 && line[0] !== " ")
    .map((line) => line.substring(3).trim());
  consola.log("本次提交涉及文件：\n" + files.join("\n"));

  const dirnames = [...new Set(files.map((file) => dirname(file)))];

  scopes
    .filter((scope) => {
      const name = scope.name;
      const pkgname = name.substring(0, name.indexOf(":"));
      return dirnames.some(
        (dirname) => dirname === pkgname || dirname.startsWith(pkgname)
      );
    })
    .forEach((scope) => {
      defaultScopes.push(scope.value);
    });
  consola.log("本次提交涉及范围：\n" + defaultScopes.join("\n"));

  return defaultScopes;
}

export const defaultScopes: string[] = getDefaultScope();
