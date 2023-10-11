import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ // отвечает за то, что все файлы с расширением .html должны быть обработаны
      template: paths.html
    }),
    new webpack.ProgressPlugin(), // отвечает за прогресс бар webpack
    new MiniCssExtractPlugin({ // отвечает за то, что все файлы с расширением .css должны быть обработаны
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({ // отвечает за объявление глобальных переменных
      _isDev: JSON.stringify(process.env.NODE_ENV !== 'production')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
