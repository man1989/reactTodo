const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const __PATH_VARIABLE__ = {
    SRC: path.resolve(__dirname, "../src"),
    DIST: path.resolve(__dirname, "../dist")
}
const extractLess = new ExtractTextPlugin({
    filename: "styles/style.css"
});

const htmlPlugin = new HtmlWebpackPlugin({
    filename: "index.html",
    template: "src/index.html"
});

let jsConfig = {
    entry: {
        app: `${__PATH_VARIABLE__.SRC}/app.js`
    },
    output: {
        filename: "js/[name].bundle.js",
        path: `${__PATH_VARIABLE__.DIST}/`,
        publicPath: "static/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: [
                    {
                        loader: "eslint-loader"
                    },
                    {
                        loader: "babel-loader"
                    }, 
                    {
                        loader: "react-hot-loader/webpack"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }]
                })
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), extractLess, htmlPlugin]
}

module.exports = jsConfig;