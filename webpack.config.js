const	path	=	require("path");
module.exports = {
  entry: ['whatwg-fetch', "./js/app.jsx"],
  output: {
    path: path.resolve("dist"),
    filename:	"./js/out.js"
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-2','react',"react-native", "react-native-dotenv"]
        }
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      }
    ]
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devServer: {
   headers: { "Access-Control-Allow-Origin": "*" }
 }
}
