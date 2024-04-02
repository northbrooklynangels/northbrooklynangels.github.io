const webpack = require("webpack");
const path = require("node:path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
    entry: {
        main: path.join(__dirname, "src", "ts", "index.ts"),
        swiper: path.join(__dirname, "src", "ts", "swiper.ts"),
        map: path.join(__dirname, "src", "ts", "map.ts"),
        lightbox: path.join(__dirname, "src", "ts", "lightbox.ts")
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name][ext]"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.((eot)|(woff)|(woff2)|(ttf))(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset/resource"
            },
            {
                test: /\.(gif|png|jpe?g|svg)/i,
                type: "asset/resource",
                exclude: /site\/static/
            },
            // This was in the v4 build, not sure if this needs to be replaced
            // {test: /\.json$/, loader: "json-loader"},
            {
                loader: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-env"
                    ],
                    plugins: [
                        "@babel/plugin-syntax-object-rest-spread",
                        "@babel/plugin-transform-object-rest-spread"
                    ]
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                // exclude: /node_modules/,
                use: ["style-loader", {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".css", ".scss"]
    },

    plugins: [
        new AssetsPlugin({
            filename: "webpack.json",
            path: path.join(process.cwd(), "site/data"),
            prettyPrint: true,
            removeFullPathAutoPrefix: true
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/fonts/",
                    to: "fonts/[name][ext]"
                }
            ]
        })
    ]
}