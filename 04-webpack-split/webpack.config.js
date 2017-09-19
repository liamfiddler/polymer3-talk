module.exports = {
    entry: "./src/my-app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        [
                            "env",
                            {
                                "targets": {
                                    "browsers": [
                                        "last 2 versions",
                                        "IE >= 11"
                                    ]
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(html|css)$/,
                use: 'raw-loader'
            }
        ]
    }
};
