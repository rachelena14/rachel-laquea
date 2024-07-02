const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  devtool: 'eval-source-map', // For development mode
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output file
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Presets for modern JavaScript and React
          }
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
    new Dotenv(), // Load environment variables from .env file
  ],
  devServer: {
    static: path.join(__dirname, 'public'), // Serve files from the public directory
    port: 3000, // Port number for the dev server
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
};
