import { type Plugin, type ParserOptions } from "prettier";
import { type ObjectExpression } from "./types";

import { parsers } from "prettier/plugins/babel";
import { sortPackage, sortTsconfig } from "./sort";

const PKG_REG = /[/\\]package\.json$/;
const TS_CONFIG_REG = /[/\\]tsconfig(\..*)?\.json$/;

function parse(text: string, options: ParserOptions) {
  const { filepath } = options;
  const ast = parsers["json"].parse(text, options) as {
    node: ObjectExpression;
  };

  if (PKG_REG.test(filepath)) {
    return sortPackage(ast);
  }

  if (TS_CONFIG_REG.test(filepath)) {
    return sortTsconfig(ast);
  }

  return ast;
}

const plugin: Plugin = {
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

export { plugin };
