var CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        barrage: './client/barrage/main.ts',
        manage: './client/manage/main.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // {
            //     test: /jquery[\/\\]dist[\/\\]jquery.min.js/,
            //     loader: 'script-loader'
            // },
            // {
            //     test: /socket.io-client[\/\\]dist[\/\\]socket.io/,
            //     loader: 'script-loader'
            // },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css/,
                include: path.resolve(__dirname, 'client'),
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist')
    },
    plugins: [
        new CleanWebpackPlugin([
            'public/dist',
            'public/assets'
        ], {
            root: path.resolve(__dirname)
        })
    ]
}