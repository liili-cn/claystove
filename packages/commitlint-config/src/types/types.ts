import type { ScopesType } from "cz-git";

export type ScopesTypeItem = Exclude<Required<ScopesType[number]>, string>;
