import type {
  ArrayExpression as _ArrayExpression,
  ObjectExpression as _ObjectExpression,
  ObjectProperty as _ObjectProperty,
  StringLiteral,
  NumericLiteral,
  BooleanLiteral,
  NullLiteral,
} from "@babel/types";

export type PrimitiveExpression =
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | NullLiteral;

export interface ObjectExpression extends _ObjectExpression {
  properties: ObjectProperty[];
}

export interface ObjectProperty extends _ObjectProperty {
  key: StringLiteral;
  value: ObjectExpression | ArrayExpression | PrimitiveExpression;
}

export interface ArrayExpression extends _ArrayExpression {
  elements: Array<ObjectExpression | ArrayExpression | PrimitiveExpression>;
}
