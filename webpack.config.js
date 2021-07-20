const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template : path.join(__dirname, "public/index.html"),
    filename : "./index.html",
});

module.exports = {
    mode      : "development",
    entry     : "./src/index.js",
    output    : {
        path     : path.resolve(__dirname, "public"),
        filename : "main.js",
    },
    target    : "node",
    devServer : {
        port        : "9500",
        contentBase : "./public",
        open        : true,
    },
    resolve   : {
        extensions : [ ".js", ".jsx", ".json" ],
    },
    module    : {
        rules : [
            {
                test    : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use     : {
                    loader : "babel-loader",
                },
            },
            {
                test : /\.css$/i,
                use  : [
                    require.resolve("style-loader"),
                    {
                        loader  : require.resolve("css-loader"),
                        options : {
                            modules : {
                                mode           : "local",
                                localIdentName :
                                    "[name]__[local]__[hash:base64:5]",
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins   : [ htmlWebpackPlugin ],
};
