// Importa el módulo interno de Node.js llamado "path".
// Este módulo sirve para trabajar con rutas de archivos y carpetas.
const path = require("path");

// Importa el plugin "html-webpack-plugin".
// Este plugin permite generar un archivo HTML en la carpeta final "dist"
// e insertar automáticamente el archivo JavaScript generado por Webpack.
const HtmlWebpackPlugin = require("html-webpack-plugin");

// sirve para copiar archivos estaticos como css, favicon, entre otros. e incluirlo en el proyecto
// build
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Exporta la configuración de Webpack.
// Webpack leerá este objeto para saber cómo compilar el proyecto.
module.exports = {
  // Define el modo de trabajo.
  // "development" se usa durante el desarrollo porque compila más rápido
  // y facilita la depuración del código.
  //   mode: "development",

  // Define el archivo principal de entrada.
  // Webpack empezará a leer el proyecto desde este archivo.
  entry: "./src/index.js",

  // Configura la salida del proyecto compilado.
  output: {
    // Define la carpeta donde Webpack guardará los archivos finales.
    // __dirname representa la carpeta actual donde está este archivo de configuración.
    // path.resolve(__dirname, "dist") crea una ruta absoluta hacia la carpeta "dist".
    path: path.resolve(__dirname, "dist"),

    // Define el nombre del archivo JavaScript final generado por Webpack.
    filename: "main.js",

    // Limpia automáticamente la carpeta "dist" antes de generar una nueva compilación.
    // Así evita que queden archivos viejos acumulados.
    clean: true,
  },

  // Configura cómo Webpack resuelve las extensiones de archivos al importar.
  resolve: {
    // Permite importar archivos JavaScript sin escribir la extensión ".js".
    // Ejemplo:
    // import saludar from "./saludar";
    // Webpack entenderá que es "./saludar.js".
    extensions: [".js"],
  },

  // Configura las reglas para procesar distintos tipos de archivos.
  module: {
    // Lista de reglas que Webpack aplicará a los archivos del proyecto.
    rules: [
      {
        // Expresión regular que indica qué archivos serán procesados.
        // /\.js$/ significa: archivos que terminen exactamente en ".js".
        test: /\.js?$/,

        // Excluye la carpeta "node_modules".
        // Esto evita que Babel procese dependencias externas instaladas con pnpm/npm.
        exclude: /node_modules/,

        // Define qué loader se usará para transformar estos archivos.
        use: {
          // Usa "babel-loader" para pasar el código JavaScript por Babel.
          // Babel permite convertir JavaScript moderno a una versión más compatible.
          loader: "babel-loader",
        },
      },
    ],
  },

  // Configura los plugins que Webpack utilizará.
  plugins: [
    // Crea un archivo HTML final usando la plantilla indicada.
    new HtmlWebpackPlugin({
      // Inserta automáticamente el script generado por Webpack dentro del HTML.
      // En este caso insertará "main.js" en el archivo final.
      inject: true,

      // Define el archivo HTML base que se usará como plantilla.
      template: "./public/index.html",

      // Define el nombre del archivo HTML que se generará en la carpeta "dist".
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/styles/styles.css", to: "" }],
    }),
  ],
};
