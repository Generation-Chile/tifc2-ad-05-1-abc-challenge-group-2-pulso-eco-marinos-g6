
// Función que cambia el color de un elemento basado en su ID
function colores(id) {
    // Obtiene el elemento por su ID
    const elementos = document.getElementById(id);

    // Cambia el color del elemento basado en su color actual
        if (elementos.style.color === `red`) {
        elementos.style.color = `blue`;
        } else if (elementos.style.color === `blue`) { 
        elementos.style.color = `green`;
        } else {
        elementos.style.color = `red`;
        }
}