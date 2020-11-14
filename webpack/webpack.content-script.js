/* Common Config */
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

/* Paths */
const { DISTRIBUTION_ROOT, CONTENT_SCRIPT_ROOT } = require('./path-helpers')

/* Content Script Webpack Config */
module.exports = merge(commonConfig, {
    entry: `${CONTENT_SCRIPT_ROOT}/index.ts`,
    output: {
        path: `${DISTRIBUTION_ROOT}/content-script`,
        filename: 'bundle.js'
    }
})
