import { defineConfig, type UserConfig, type TypesOption } from "cz-git";
import { type ParserPreset } from "@commitlint/types";
// @ts-ignore
import createPreset from "conventional-changelog-conventionalcommits";
import { merge } from "lodash-es";

const types: TypesOption[] = [
  {
    value: "feat",
    name: "feat:     ✨  新增功能",
    emoji: ":sparkles:",
  },
  {
    value: "fix",
    name: "fix:      🐞  修复漏洞",
    emoji: ":lady_beetle:",
  },
  {
    value: "test",
    name: "test:     ✅  新增、更新测试用例或通过测试",
    emoji: ":white_check_mark:",
  },
  {
    value: "docs",
    name: "docs:     📝  新增或更新文档",
    emoji: ":memo:",
  },
  {
    value: "refactor",
    name: "refactor: ♻️  重构代码",
    emoji: ":recycle:",
  },
  {
    value: "perf",
    name: "perf:     ⚡️  优化性能",
    emoji: ":zap:",
  },
  {
    value: "style",
    name: "style:    🌈  优化代码结构 / 格式",
    emoji: ":rainbow:",
  },
  {
    value: "build",
    name: "build:    🔨  构建相关",
    emoji: ":hammer:",
  },
  {
    value: "ci",
    name: "ci:       💚  新增或更新持续集成（CI）构建系统",
    emoji: ":green_heart:",
  },
  {
    value: "chore",
    name: "chore:    🧹  其他修改",
    emoji: ":broom:",
  },
  {
    value: "revert",
    name: "revert:   ⏪️  回滚变更",
    emoji: ":rewind:",
  },
  {
    value: "merge",
    name: "merge:    🔀  合并分支",
    emoji: ":twisted_rightwards_arrows:",
  },
  {
    value: "publish",
    name: "publish:  🔖  发布版本 / 打版本标签",
    emoji: ":bookmark:",
  },
  {
    value: "hotfix",
    name: "hotfix:   🚑️  重大热修复",
    emoji: ":ambulance:",
  },
  {
    value: "deps",
    name: "deps:     📦️  依赖相关",
    emoji: ":package:",
  },
  {
    value: "configs",
    name: "configs:  ⚙️  改变配置文件",
    emoji: ":gear:",
  },
  {
    value: "license",
    name: "license:  📄  新增或更新许可证",
    emoji: ":page_facing_up:",
  },
  {
    value: "ignore",
    name: "ignore:   🙈  新增或更新 ignore 文件",
    emoji: ":see_no_evil:",
  },
  {
    value: "init",
    name: "init:     🎉  项目初始化",
    emoji: ":tada:",
  },
];

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

  const emojiParser = merge({}, await createPreset(), {
    conventionalChangelog: { parserOpts },
    parserOpts,
    recommendedBumpOpts: { parserOpts },
  });

  return emojiParser;
}

const emojiParser = await createEmojiParser();

export default defineConfig({
  extends: ["@commitlint/config-conventional"],
  parserPreset: emojiParser,
  rules: {
    // @see: https://commitlint.js.org/#/reference-rule
    "type-enum": [2, "always", types.map((type) => type.value)],
  },
  prompt: {
    alias: {
      ft: ":pencil2: chore: 修正拼写错误",
    },
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: types,
    useEmoji: true,
    emojiAlign: "left",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [],
    enableMultipleScopes: true,
    scopeEnumSeparator: ",",
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: null,
    markBreakingChangeMode: true,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [
      { value: "link", name: "link:     链接 ISSUES 进行中" },
      { value: "closed", name: "closed:   标记 ISSUES 已完成" },
    ],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
}) satisfies UserConfig;
