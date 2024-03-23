const { merge } = require("webpack-merge");
const path = require("node:path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",

    output: {
        filename: "[name].js",
        chunkFilename: "[id].css",
        clean: true
    },

    devtool: "source-map",

    devServer: {
        port: process.env.PORT || 3000,
        static: {
            directory: path.join(process.cwd(), "./dist"),
            watch: true
        },
        open: true,
        historyApiFallback: {
            rewrites: [{ from: /./, to: "404.html" }]
        }
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
})