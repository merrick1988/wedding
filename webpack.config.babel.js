import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const appPath = __dirname,
    frontendPath = path.join(appPath, "frontend"),
    distPath = path.join(appPath, "dist");

module.exports = {
    cache: true,
    entry: {
        main: [
            path.join(frontendPath, "app.jsx")
        ]

    },
    output: {
        path: distPath,
        filename: "[name].js",
        libraryTarget: "this",
        library: "[name]"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    "react-hot",
                    "babel",
                    "autoimport?config[]=checkIfUsed&" + [
                        "lodash=>lodash",
                        "React=>react",
                        "ReactDOM=>react-dom"
                    ].join(","),
                    "eslint"
                ].join("!")
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: "url-loader?limit=8192&name=[name].[ext]"
            }, {
                test: /images\/.*\.(ico)$/,
                loader: "file?name=[name].[ext]"
            }, {
                test: /fonts\/.*\.(eot|ttf|woff|woff2|svg|svgz)$/,
                loader: "file?name=fonts/[name].[ext]"
            }, {
                test: /\.json/,
                loader: "json"
            } , {
                test: /materialize-css\/bin\//,
                loader: "imports?jQuery=jquery,$=jquery,hammerjs"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: "body",
            hash: true,
            xhtml: true
        })
    ],
    devServer: {
        noInfo: false,
        contentBase: distPath,
        stats: {
            chunks: false,
            chunkModules: false,
            timings: true
        }

    }
};