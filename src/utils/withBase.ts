/** Astroに設定した[base](https://docs.astro.build/en/reference/configuration-reference/#base)を先頭に付与したパスを返す */
// Based on https://github.com/GoCon/2024/blob/ddf8dcc1779cbe9a7becc3e6b8538dce1c627323/src/utils/concatWithBase.ts
export const withBase = (path?: string) => {
  const base = import.meta.env.BASE_URL;
  return path ? `${base}/${path}` : base;
};
