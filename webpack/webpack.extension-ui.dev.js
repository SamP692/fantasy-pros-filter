/* Libraries */
const { merge } = require('webpack-merge')

/* Base Extension UI Webpack Config */
const baseExtensionUiConfig = require('./webpack.extension-ui')

/* Paths */
const { DISTRIBUTION_ROOT } = require('./path-helpers')

/* Extension UI Development Webpack Config */
module.exports = merge(baseExtensionUiConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: `${DISTRIBUTION_ROOT}/extension-ui`
    }
})
