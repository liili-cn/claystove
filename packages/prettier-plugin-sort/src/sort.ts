import type { ObjectExpression, ObjectProperty } from "./types";
import { packageOrder, tsconfigOrder } from "./order";
import { alphabetSort } from "./utils";

function sortByOrder(ast: { node: ObjectExpression }, order: string[]) {
  const others: ObjectProperty[] = [];
  const known = ast.node.properties.filter((property) => {
    if (order.includes(property.key.value)) {
      return true;
    }
    others.push(property);
    return false;
  });

  known.sort((a, b) => {
    const indexA = order.indexOf(a.key.value);
    const indexB = order.indexOf(b.key.value);
    return alphabetSort(indexA, indexB);
  });
  others.sort((a, b) => {
    return alphabetSort(a.key.value, b.key.value);
  });

  ast.node.properties = [...known, ...others];
}

function sortPackage(ast: { node: ObjectExpression }): {
  node: ObjectExpression;
} {
  sortByOrder(ast, packageOrder);

  return ast;
}

function sortTsconfig(ast: { node: ObjectExpression }): {
  node: ObjectExpression;
} {
  sortByOrder(ast, tsconfigOrder);

  return ast;
}

export { sortPackage, sortTsconfig };
