/* Libraries */
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* Common Config */
const commonConfig = require('./webpack.common')

/* Paths */
const { DISTRIBUTION_ROOT, EXTENSION_UI_ROOT } = require('./path-helpers')

/* Extension UI Webpack Config */
module.exports = {
    ...commonConfig,
    entry: `${EXTENSION_UI_ROOT}/index.tsx`,
    output: {
        path: `${DISTRIBUTION_ROOT}/extension-ui`,
        filename: 'bundle.js'
    },
    plugins: [
        ...commonConfig.plugins,
        new HtmlWebpackPlugin({
            template: `${EXTENSION_UI_ROOT}/index.html`
        })
    ]
}
