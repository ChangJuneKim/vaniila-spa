const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  name: "my-first-webpack", // 없어도 됨 ( 그냥 어떤 설정인지 쓰는 용도 )
  mode: "development", // 실서비스에선 production
  devtool: "eval", // 소스맵 생성 방법 production에선 다른걸 써야한다 ex) hidden-source-map

  entry: "./frontend/static/js/index.js", // 엔트리 포인트

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

  output: {
    filename: "bundle.js", // 번들된 파일 이름
    publicPath: "/static/",
    path: path.resolve(__dirname, "frontend", "dist"), // 번들된 파일의 위치
  },

  devServer: {
    devMiddleware: {
      publicPath: "/static/",
    },
    static: {
      directory: path.join(__dirname, "frontend"),
    },
    port: 9000,
  },
};
