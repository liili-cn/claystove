import type { Plugin, ParserOptions } from "prettier";
import { sortPackageJson } from "sort-package-json";
import { packageJsonSortOrder } from "./order";
import { sortExports } from "./sort";
import { parsers } from "prettier/plugins/babel";

const PKG_REG = /[/\\]package\.json$/;

function preprocess(text: string, options: ParserOptions): string {
  let json = text;
  const { filepath } = options;

  if (PKG_REG.test(filepath)) {
    json = sortPackageJson(text, { sortOrder: packageJsonSortOrder });

    // sort exports
    json = JSON.stringify(sortExports(text));
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
