import type { ParserPreset } from "@commitlint/types";
import { types } from "./type";

// A helper function to create the custom emoji parser preset.
export async function createEmojiParser(): Promise<ParserPreset> {
  // Generates the regex from the emojis defined in the conventional config.
  const emojiRegexPart = Object.values(types)
    .map((option) => option.emoji?.trim())
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

  return emojiParser;
}
