import type { ParserOptions, Plugin } from "prettier";
import { default as detectIndent } from "detect-indent";
import { detectNewlineGraceful as detectNewline } from "detect-newline";
import { packageJsonSortOrder } from "./order";
import { parsers } from "prettier/plugins/babel";
import { sortExports } from "./sort";
import { sortPackageJson } from "sort-package-json";

const PKG_REG = /[/\\]package\.json$/;

function editStringJSON(json: string, over: (json: string) => object): string {
  const { indent, type } = detectIndent(json);
  const endCharacters = json.slice(-1) === "\n" ? "\n" : "";
  const newline = detectNewline(json);

  let result =
    JSON.stringify(over(json), undefined, type === "tab" ? "\t" : indent) +
    endCharacters;
  if (newline === "\r\n") {
    result = json.replaceAll("\n", newline);
  }

  return result;
}

function preprocess(text: string, options: ParserOptions): string {
  let json = text;
  const { filepath } = options;

  if (PKG_REG.test(filepath)) {
    json = sortPackageJson(text, { sortOrder: packageJsonSortOrder });

    // sort exports
    json = editStringJSON(json, sortExports);
  }

  return json;
}

export const plugin: Plugin = {
  parsers: {
    json: {
      ...parsers["json"],
      preprocess,
    },
    "json-stringify": {
      ...parsers["json-stringify"],
      preprocess,
    },
  },
};
