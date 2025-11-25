import type { Plugin, ParserOptions } from "prettier";
import detectIndent from "detect-indent";
import { detectNewlineGraceful as detectNewline } from "detect-newline";
import { sortPackageJson } from "sort-package-json";
import { packageJsonSortOrder } from "./order";
import { sortExports } from "./sort";
import { parsers } from "prettier/plugins/babel";

const PKG_REG = /[/\\]package\.json$/;

function editStringJSON(json: any, over: (json: any) => any) {
  if (typeof json === "string") {
    const { indent, type } = detectIndent(json);
    const endCharacters = json.slice(-1) === "\n" ? "\n" : "";
    const newline = detectNewline(json);
    json = JSON.parse(json);

    let result =
      JSON.stringify(over(json), null, type === "tab" ? "\t" : indent) +
      endCharacters;
    if (newline === "\r\n") {
      result = result.replace(/\n/g, newline);
    }
    return result;
  }

  return over(json);
}

function preprocess(text: string, options: ParserOptions) {
  const { filepath } = options;

  if (PKG_REG.test(filepath)) {
    text = sortPackageJson(text, { sortOrder: packageJsonSortOrder });

    // sort exports
    text = editStringJSON(text, sortExports);
  }

  return text;
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
