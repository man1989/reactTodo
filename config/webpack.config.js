const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const __PATH_VARIABLE__ = {
    SRC: path.resolve(__dirname, "../src"),
    DIST: path.resolve(__dirname, "../dist")
}
const extractLess = new ExtractTextPlugin({
    filename:"[name].css"
});
let jsConfig = {
    entry: {
        app: `${__PATH_VARIABLE__.SRC}/app.js`
    },
    output:{
        filename:"[name].bundle.js",
        path:`${__PATH_VARIABLE__.DIST}/js/`,
        publicPath:"/static/js/"
    },
    module:{
        rules:[
            {
                test:/\.js$/, 
                exclude:/node_module/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["react"]
                    }
                },{
                    loader:"react-hot-loader/webpack"                    
                }
                ]
            }
        ]
    },
    plugins:[new webpack.HotModuleReplacementPlugin()]
}

let styleConfig = {
    entry: {
        style: __PATH_VARIABLE__.SRC+"/styles/style.less"
    },
    output: {
        filename: "[name].css",
        path: __PATH_VARIABLE__.DIST+"/styles/",
        publicPath: "/static/styles/"
    },
    module: {
        rules:[{
            test:/\.less$/,
            use: extractLess.extract({
                use:[{
                    loader:"css-loader"
                },{
                    loader: "less-loader"
                }]
            })
        }]
    },
    plugins:[extractLess]
}

module.exports = [jsConfig, styleConfig];