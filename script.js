// Función para generar un color aleatorio entre Verde, Azul y Rojo
function getRandomColor() {
    const colors = ['green', 'blue', 'red'];//  Colores disponibles
    return colors[Math.floor(Math.random() * colors.length)];// Selecciona un color aleatorio
    //(Math.random() * colors.length) genera un número aleatorio entre 0 y el tamaño del array - 1
    //Math.floor() redondea hacia abajo al número entero más cercano
}

// Función para cambiar el color de un elemento al hacer clic
function changeColorOnClick(event) {
    event.target.style.color = getRandomColor();// Cambia el color del texto del elemento que fue clicado
    // event.target se refiere al elemento que disparó el evento
    // style.color establece el color del texto del elemento
    // event.target.style.color = 'red'; // Cambia el color del texto a rojo (ejemplo de color fijo)
}

// Seleccionar todas las etiquetas h5 y agregarles el evento de clic
document.addEventListener('DOMContentLoaded', () => {
    const h5Elements = document.querySelectorAll('h5');// Selecciona todos los elementos h5 en el documento
    h5Elements.forEach(h5 => {
        h5.addEventListener('click', changeColorOnClick);// Agrega el evento de clic a cada elemento h5
    });
});