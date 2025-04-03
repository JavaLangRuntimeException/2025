import { join } from "node:path";

/** Astroに設定した[base](https://docs.astro.build/en/reference/configuration-reference/#base)を先頭に付与したパスを返す */
// Based on https://github.com/GoCon/2024/blob/ddf8dcc1779cbe9a7becc3e6b8538dce1c627323/src/utils/concatWithBase.ts
export const withBase = (
  path?: string,
  { base = import.meta.env.BASE_URL }: { base?: string } = {},
) => {
  if (!path) {
    return base;
  }
  return join(base, path);
};

if (import.meta.vitest) {
  const { describe, test, expect } = import.meta.vitest;
  describe("withBase", () => {
    test.each<{ base: string; path: string; expected: string }>([
      { base: "/", path: "", expected: "/" },
      { base: "/", path: "/", expected: "/" },
      { base: "/", path: "/a", expected: "/a" },
      { base: "/", path: "/a/b", expected: "/a/b" },
      { base: "/2025", path: "", expected: "/2025" },
      { base: "/2025", path: "/", expected: "/2025/" },
      { base: "/2025", path: "/a", expected: "/2025/a" },
      { base: "/2025", path: "/a/b", expected: "/2025/a/b" },
    ])(
      "withBase($path, { base: $base }) -> $expected",
      ({ base, path, expected }) => {
        expect(withBase(path, { base })).toBe(expected);
      },
    );
  });
}
