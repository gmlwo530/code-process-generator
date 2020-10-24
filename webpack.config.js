const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, options) => {
  const config = {
    entry: ["./src/index.tsx"],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".css", ".scss"],
      modules: [path.join(__dirname, "src"), "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html",
      }),
    ],
  };

  if (options.mode === "production") {
    config.mode = "production";
  } else {
    config.mode = "development";
    config.devtool = "cheap-eval-sourcemap";
    config.devServer = {
      port: 3000,
      contentBase: path.resolve(__dirname, "build"),
      compress: true,
      watchContentBase: true,
    };
  }

  return config;
};
