import { type TypesOption } from "cz-git";

export const types: TypesOption[] = [
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
    name: "refactor: ♻️   重构代码",
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
    value: "init",
    name: "init:     🎉  项目初始化",
    emoji: ":tada:",
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
    value: "remove",
    name: "remove:   🔥  删除代码或文件",
    emoji: ":fire:",
  },
  {
    value: "configs",
    name: "configs:  ⚙️   改变配置文件",
    emoji: ":gear:",
  },
  {
    value: "scripts",
    name: "scripts:  ▶️   新增或更新开发脚本",
    emoji: ":arrow_forward:",
  },
  {
    value: "deps",
    name: "deps:     📦️  依赖相关",
    emoji: ":package:",
  },
];
