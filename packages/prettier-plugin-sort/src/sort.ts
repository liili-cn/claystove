import type { ObjectExpression, ObjectProperty } from "./types/types";
import { tsconfigSortOrder } from "./order";
import { alphabeticSort } from "./shared/utils";

function sortExports(value: ObjectProperty["value"]) {
  if (value.type === "ObjectExpression") {
    const first: ObjectProperty[] = [];
    const last: ObjectProperty[] = [];
    const others: ObjectProperty[] = [];
    value.properties.forEach((prop) => {
      if (prop.key.value === "types") {
        first.push(prop);
      } else if (prop.key.value === "default") {
        last.push(prop);
      } else {
        others.push(prop);
      }

      sortExports(prop.value);
    });

    value.properties = [...first, ...others, ...last];
  }

  if (value.type === "ArrayExpression") {
    value.elements.forEach((expression) => {
      sortExports(expression);
    });
  }
}

export function sortPackage(ast: { node: ObjectExpression }): void {
  // sort exports
  const exports = ast.node.properties.find((prop) => {
    return prop.key.value === "exports";
  });

  if (exports) {
    sortExports(exports.value);
  }
}

function sortByOrder(value: ObjectProperty["value"], order: string[]) {
  if (value.type === "ObjectExpression") {
    const known: ObjectProperty[] = [];
    const others: ObjectProperty[] = [];
    value.properties.forEach((prop) => {
      if (order.includes(prop.key.value)) {
        known.push(prop);
      } else {
        others.push(prop);
      }

      if (prop.key.value in tsconfigSortOrder) {
        sortByOrder(prop.value, tsconfigSortOrder[prop.key.value]!);
      }
    });

    known.sort((a, b) => {
      const indexA = known.findIndex((prop) => a.key.value === prop.key.value);
      const indexB = known.findIndex((prop) => b.key.value === prop.key.value);
      return alphabeticSort(indexA, indexB);
    });
    others.sort((a, b) => {
      return alphabeticSort(a.key.value, b.key.value);
    });

    value.properties = [...known, ...others];
  }
}

export function sortTsconfig(ast: { node: ObjectExpression }): void {
  sortByOrder(ast.node, tsconfigSortOrder.$root);
}
