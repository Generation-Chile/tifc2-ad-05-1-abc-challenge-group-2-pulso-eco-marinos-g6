/*Sección de JavaScript

· Vincular script.js a HTML

· Haz una función que aplique 3 colores aleatorios al azar.

o Verde, Azul y Rojo.

· Cuando alguien haga clic en cualquier etiqueta h5, haga que cambie a alguno de los 3 colores aleatorios.

o Verde, Azul y Rojo.*/

/*Función para aplicar 3 colores aleatorios al azar*/

/*function changeColor() {
    const colors = ['green', 'blue', 'red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}*/

let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);