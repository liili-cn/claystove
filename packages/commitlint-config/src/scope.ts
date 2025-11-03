import type { ScopesTypeItem } from "./types/types";
import { resolve, basename, dirname } from "node:path";
import { existsSync, readFileSync } from "node:fs";
import { parseYAML, parseJSON } from "confbox";
import { sync } from "fast-glob";

function normalizePatterns(patterns: string[]): string[] {
  return patterns.map((pattern) => {
    return pattern.replace(/\/?$/, "/package.json");
  });
}

export function getScopes(): ScopesTypeItem[] {
  let scopes: ScopesTypeItem[] = [];

  const path = resolve(process.cwd(), "pnpm-workspace.yaml");
  if (!existsSync(path)) {
    return scopes;
  }

  const { packages } = parseYAML<{ packages: string[] }>(
    readFileSync(path, "utf-8")
  );

  const patterns = normalizePatterns(packages);

  sync(patterns).forEach((pattern) => {
    const filepaths = sync(pattern, {
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
