const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./frontend/static/js/index.js", // 엔트리 포인트
  output: {
    filename: "bundle.js", // 번들된 파일 이름
    publicPath: "/dist/",
    path: path.resolve(__dirname, "frontend", "dist"), // 번들된 파일의 위치
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // 필요에 따라 다른 로더 추가
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "frontend"),
    },
    compress: true,
    port: 9000,
  },
};
