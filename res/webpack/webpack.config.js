var path = require('path');
var cwd = process.cwd();

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(cwd, 'dist/'),
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', '.html', '.css'],
        modules: [cwd, 'node_modules']
    },
};
