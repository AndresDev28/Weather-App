const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Punto de entrada de la app
  output: {
    filename: 'main.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
  },
  mode: 'development',
  devServer: {
    static: './dist', // Directorio desde donde se servirán los archivos
    port: 8080, // Puerto donde se ejecutrá el navegador al iniciar el servidor
    open: true,
    hot: true, // Habilita Hot Module Replacement
    watchFiles: ['./src/**/*.{js,css,html}'], // Observa los archivos especificados
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ruta al archivo HTML plantilla en el src
      filename: 'index.html', // Nombre del archivo HTML generado
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Aplica la regla a los archivos .css
        use: [
          'style-loader', // Inyecta los estilos al DOM
          'css-loader', // Convierte el CSS en modulos CommonJS
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            // type: "asset/resource",
            options: {
              // name: "[name].[contenthash].[ext]",
              name: '[contenthash].[ext]',
              outputPath: 'images/', // This is where the images will be copied
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/i, // Aplica la regla a videos
        type: 'asset/resource', // Maneja los videos como recursos
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
