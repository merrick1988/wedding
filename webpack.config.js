const webpack = require("webpack"),
    path = require("path"),
    appPath = __dirname,
    frontendPath = path.join(appPath, "frontend"),
    distPath = path.join(appPath, "dist");

module.exports = {
    cache: true,
    entry: {
        main: [
            path.join(frontendPath, 'app.jsx')
        ]

    },
    output: {
        path: distPath,
        filename: '[name].js',
        libraryTarget: 'this',
        library: '[name]'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    'react-hot',
                    'babel',
                    'autoimport?config[]=checkIfUsed&' + [
                        'React=>react',
                        'ReactDOM=react-dom'
                    ].join(','),
                    'eslint'
                ].join('!')
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            }, {
                test: /fonts\/.*\.(eot|ttf|woff|svg|svgz)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }, {
                test: /\.json/,
                loader: 'json'
            }
        ]
    },
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