const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        path: path.join(__dirname, "./docs")
    },
    resolve:{
        extensions:['.ts']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader"
                },
                exclude:/node_module/
            },
            {
                test:/\.(png|jpg|svg|gif|m4a)$/,
                loader:"file-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html")
        })
    ]
}


