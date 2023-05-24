import webpack from "webpack";

const typeScriptLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};
const scssLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true,
        auto: (resPath: string) => Boolean(resPath.includes(".module")),
      },
    },
    "sass-loader",
  ],
};

export function buildLoaders(): webpack.RuleSetRule[] {
  return [typeScriptLoader, scssLoader];
}
