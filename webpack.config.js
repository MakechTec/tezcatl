const path = require('path');

module.exports = {
    mode: 'production',
    entry: "./prebuild/CLIChooser.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "cli-chooser.js",
        library:{
            type: "commonjs-static",
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-proposal-class-properties"],
                        }
                    }
                ],
            }
        ],
    },
    target: "node",
};