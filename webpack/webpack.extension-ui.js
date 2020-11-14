/* Libraries */
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* Common Config */
const commonConfig = require('./webpack.common')

/* Paths */
const { DISTRIBUTION_ROOT, EXTENSION_UI_ROOT } = require('./path-helpers')

/* Extension UI Webpack Config */
module.exports = merge(commonConfig, {
    entry: `${EXTENSION_UI_ROOT}/index.tsx`,
    output: {
        path: `${DISTRIBUTION_ROOT}/extension-ui`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${EXTENSION_UI_ROOT}/index.html`
        })
    ]
})
