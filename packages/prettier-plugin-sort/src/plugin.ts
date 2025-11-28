import type { ParserOptions, Plugin } from "prettier";
import { packageJsonSortOrder } from "./order";
import { parsers } from "prettier/plugins/babel";
import { sortExports } from "./sort";
import { sortPackageJson } from "sort-package-json";

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
