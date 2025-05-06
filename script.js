
function colores(id) {

    const elementos = document.getElementById(id);

        if (elementos.style.color === `red`) {
        elementos.style.color = `blue`;
        } else if (elementos.style.color === `blue`) { 
        elementos.style.color = `green`;
        } else {
        elementos.style.color = `red`;
        }
}