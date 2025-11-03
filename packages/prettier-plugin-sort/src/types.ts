import type {
  ArrayExpression as _ArrayExpression,
  ObjectExpression as _ObjectExpression,
  ObjectProperty as _ObjectProperty,
  StringLiteral,
  NumericLiteral,
  BooleanLiteral,
  NullLiteral,
} from "@babel/types";

type JSONPrimitive =
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | NullLiteral;

interface ObjectExpression extends _ObjectExpression {
  properties: ObjectProperty[];
}

interface ObjectProperty extends _ObjectProperty {
  key: StringLiteral;
  value: ObjectExpression | ArrayExpression | JSONPrimitive;
}

interface ArrayExpression extends _ArrayExpression {
  elements: Array<ObjectExpression | ArrayExpression | JSONPrimitive>;
}

export type { ObjectExpression, ObjectProperty, JSONPrimitive };
