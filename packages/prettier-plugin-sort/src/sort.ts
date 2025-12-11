import type { PackageJson, PackageJsonExports } from "pkg-types";
import { destr } from "destr";
import { partition } from "es-toolkit/array";

function _sortExports(
  exports: PackageJsonExports | undefined
): PackageJsonExports | undefined {
  if (typeof exports === "object" && !Array.isArray(exports)) {
    const [paths, conditions] = partition(Object.keys(exports), (key) =>
      key.startsWith(".")
    );

    {
      const index = conditions.indexOf("types");
      if (index !== -1) {
        conditions.splice(index, 1);
        conditions.unshift("types");
      }
    }

    {
      const index = conditions.indexOf("default");
      if (index !== -1) {
        conditions.splice(index, 1);
        conditions.push("default");
      }
    }

    return Object.fromEntries(
      [...paths, ...conditions].map((key) => [key, _sortExports(exports[key])])
    );
  }

  return exports;
}

export function sortExports(json: string): PackageJson {
  const packageJson = destr<PackageJson>(json);
  packageJson.exports = _sortExports(packageJson.exports);

  return packageJson;
}
