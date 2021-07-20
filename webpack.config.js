module.exports = {
    // mode:'development',
    mode:'production',
    entry: './index.js',
    output: { filename: 'dist.js'},
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader'
                },
              ],
            },
        ],
    }
}