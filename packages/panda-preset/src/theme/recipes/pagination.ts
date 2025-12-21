import { defineSlotRecipe } from "@pandacss/dev";
import { paginationAnatomy } from "@ark-ui/solid/anatomy";

export const pagination = defineSlotRecipe({
  className: "pagination",
  slots: paginationAnatomy.keys(),
  base: {},
});
