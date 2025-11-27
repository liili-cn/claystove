import type { Plugin, ParserOptions } from "prettier";
import { sortPackageJson } from "sort-package-json";
import { packageJsonSortOrder } from "./order";
import { sortExports } from "./sort";
import { parsers } from "prettier/plugins/babel";

const PKG_REG = /[/\\]package\.json$/;

function preprocess(text: string, options: ParserOptions) {
  const { filepath } = options;

  if (PKG_REG.test(filepath)) {
    text = sortPackageJson(text, { sortOrder: packageJsonSortOrder });

    // sort exports
    text = JSON.stringify(sortExports(text));
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
