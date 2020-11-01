import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    context: path.join(__dirname, 'src'),
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'static'),
        open: true,
        port: 3011,
    },
};

export default config;