/* Libraries */
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/* Webpack Config */
module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}
