// Se crea una función llamada getHash
const getHash = () =>
  // location.hash obtiene el hash actual de la URL
  // Ejemplo: si la URL es http://localhost:8080/#/1/
  // location.hash sería "#/1/"

  location.hash

    // slice(1) elimina el primer carácter del hash, o sea el "#"
    // "#/1/" pasa a ser "/1/"
    .slice(1)

    // Convierte todo el texto a minúsculas
    // "/USERS/1/" pasaría a "/users/1/"
    .toLocaleLowerCase()

    // Divide el string usando "/" como separador
    // "/1/" pasa a ["", "1", ""]
    .split("/")[1] || "/";

// Obtiene la posición 1 del array
// ["", "1", ""] devuelve "1"

// Si no existe un valor en la posición [1],
// devuelve "/" como valor por defecto

// Exporta la función para poder usarla en otros archivos
export default getHash;
