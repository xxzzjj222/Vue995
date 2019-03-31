const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin=require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: path.resolve(__dirname, "./node_modules")
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gis)$/,
                use: ["url-loader"]
            },
            {
                test:/\.(woff|svg|eot|ttf)$/,
                use:["file-loader"]
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ]
}