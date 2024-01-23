const path = require("path");
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
  entry: "./src/index.ts",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  stats: {
    warningsFilter: [
      /optional dep .*?mongodb.*?not installed/,
      /@aws-sdk\/credential-providers.*?not installed/,
    ],
  },
  ignoreWarnings: [
    // Add specific warnings you want to ignore here
    /Module not found: Error: Can't resolve '\.\/zstd\.win32-x64-msvc\.node'/,
    /Module not found: Error: Can't resolve '\.\/zstd\.darwin-x64\.node'/,
    /Module not found: Error: Can't resolve '\@mongodb-js\/zstd-darwin-x64'/,
    // Add other warnings as needed
  ],
//   plugins:[new BundleAnalyzerPlugin()]
};
