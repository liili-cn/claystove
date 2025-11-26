import type { PackageJson, PackageJsonExports } from "pkg-types";
import { destr } from "destr";

function _sortExports(exports: PackageJsonExports): PackageJsonExports {
  if (
    typeof exports === "object" &&
    exports !== null &&
    !Array.isArray(exports)
  ) {
    const paths: string[] = [];
    const conditions: string[] = [];
    Object.keys(exports).forEach((key) => {
      if (key.startsWith(".")) {
        paths.push(key);
      } else {
        conditions.push(key);
      }
    });

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
      [...paths, ...conditions].map((key) => [
        key,
        exports[key] ? _sortExports(exports[key]) : exports[key],
      ])
    );
  }

  return exports;
}

export function sortExports(json: string): PackageJson {
  const packageJson = destr<PackageJson>(json);

  if (packageJson.exports) {
    packageJson.exports = _sortExports(packageJson.exports);
  }

  return packageJson;
}
