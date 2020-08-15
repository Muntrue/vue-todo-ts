const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path            = require("path");

module.exports = {
    entry: {
        app: [ "./src/app.js" ],
        vendor: [ "./src/vendor.js" ]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        open: true,
        hot: false,
        liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    tsx: ['babel-loader', 'ts-loader'],
                    ts: ['babel-loader', 'ts-loader']
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: './src/lib/variables.scss',
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        },
        extensions: [".ts", ".tsx", ".js"]
    }
};
