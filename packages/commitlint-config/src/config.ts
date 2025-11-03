import type { UserConfig } from "cz-git";
import { createEmojiParser } from "./parser";
import { types } from "./types";

const RuleConfigSeverity = {
  Disabled: 0,
  Warning: 1,
  Error: 2,
} as const;

const config: UserConfig = {
  parserPreset: (async () => {
    return await createEmojiParser();
  })(),
  rules: {
    // @see: https://commitlint.js.org/#/reference-rule
    "body-leading-blank": [RuleConfigSeverity.Warning, "always"],
    "body-max-line-length": [RuleConfigSeverity.Error, "always", 100],
    "footer-leading-blank": [RuleConfigSeverity.Warning, "always"],
    "footer-max-line-length": [RuleConfigSeverity.Error, "always", 100],
    "header-max-length": [RuleConfigSeverity.Error, "always", 100],
    "header-trim": [RuleConfigSeverity.Error, "always"],
    "subject-case": [
      RuleConfigSeverity.Error,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [RuleConfigSeverity.Error, "never"],
    "subject-full-stop": [RuleConfigSeverity.Error, "never", "."],
    "type-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "type-empty": [RuleConfigSeverity.Error, "never"],
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      types.map((type) => type.value),
    ],
  },
  prompt: {
    alias: {
      ft: ":broom: chore: 修正拼写错误",
    },
    messages: {
      type: "选择你要提交的类型:",
      scope: "选择一个提交范围(可选):",
      customScope: "请输入自定义的提交范围:",
      subject: "填写简短精炼的变更描述:\n",
      body: '填写更加详细的变更描述(可选)。使用 "|" 换行:\n',
      breaking: '列举非兼容性重大的变更(可选)。使用 "|" 换行:\n',
      footerPrefixesSelect: "选择关联 issue 前缀(可选):",
      customFooterPrefix: "输入自定义 issue 前缀:",
      footer: "列举关联 issue (可选)。例如: #31, #I3244:\n",
      confirmCommit: "是否提交或修改 commit ?",
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
      // 如果使用 gitee 作为开发管理
      { value: "link", name: "link:     链接 ISSUES 进行中" },
      { value: "closed", name: "closed:   标记 ISSUES 已完成" },
    ],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    // scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};

export { config };
