import type { Plugin, ParserOptions } from "prettier";
import type { ObjectExpression } from "./types/types";
import { sortPackageJson } from "sort-package-json";
import { packageSortOrder } from "./order";
import { parsers } from "prettier/plugins/babel";
import { sortPackage, sortTsconfig } from "./sort";

const PKG_REG = /[/\\]package\.json$/;
const TS_CONFIG_REG = /[/\\]tsconfig(\..*)?\.json$/;

function parse(text: string, options: ParserOptions) {
  const { filepath } = options;

  if (PKG_REG.test(filepath)) {
    text = sortPackageJson(text, { sortOrder: packageSortOrder });
  }

  const ast = parsers["json"].parse(text, options) as {
    node: ObjectExpression;
  };

  if (PKG_REG.test(filepath)) {
    sortPackage(ast);
  }

  if (TS_CONFIG_REG.test(filepath)) {
    sortTsconfig(ast);
  }

  return ast;
}

export const plugin: Plugin = {
  parsers: {
    json: {
      ...parsers["json"],
      parse,
    },
    "json-stringify": {
      ...parsers["json-stringify"],
      parse,
    },
  },
};
