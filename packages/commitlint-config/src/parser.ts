import { type ParserPreset } from "@commitlint/types";
import { types } from "./types";
// import { merge } from "lodash-es";
// @ts-ignore
// import createPreset from "conventional-changelog-conventionalcommits";

// A helper function to create the custom emoji parser preset.
async function createEmojiParser(): Promise<ParserPreset> {
  // Generates the regex from the emojis defined in the conventional config.
  const emojiRegexPart = Object.values(types)
    .map((value) => value.emoji?.trim())
    .join("|");

  const parserOpts = {
    // This regular expression validates commit headers with an emoji.
    breakingHeaderPattern: new RegExp(
      `^(?:${emojiRegexPart})\\s+(\\w*)(?:\\((.*)\\))?!:\\s+(.*)$`
    ),
    headerPattern: new RegExp(
      `^(?:${emojiRegexPart})\\s+(\\w*)(?:\\((.*)\\))?!?:\\s+(.*)$`
    ),
  };

  const emojiParser = {
    parserOpts,
  };

  // const emojiParser = merge({}, await createPreset(), {
  //   conventionalChangelog: { parserOpts },
  //   parserOpts,
  //   recommendedBumpOpts: { parserOpts },
  // });

  return emojiParser;
}

export { createEmojiParser };
