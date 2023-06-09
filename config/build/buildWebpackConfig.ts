import webpack from 'webpack'

import {buildDevServer} from './buildDevServer'
import {buildLoaders} from './buildLoaders'
import {buildPlugins} from './buildPlugins'
import {buildResolvers} from './buildResolve'
import {BuildOptions} from './types/config'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode} = options

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },

    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options)
  }
}
