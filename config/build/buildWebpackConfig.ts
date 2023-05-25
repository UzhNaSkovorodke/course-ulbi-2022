import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
}
