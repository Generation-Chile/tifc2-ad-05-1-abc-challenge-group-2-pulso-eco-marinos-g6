//Crear funcion que seleccione el color
function changeColor(num){
    let colorList = ['green', 'blue', 'red'];
    let selectColor = colorList[num];
    return selectColor;
}
//Seleccionamos todos los h5 del documento
let collectionH5 = document.querySelectorAll('h5');
//Recorremos la lista de H5 x elemento
collectionH5.forEach((e) => {
    //invocamos el evento 'click' x elemento
    e.addEventListener("click", function(e) {
        //Asignamos un numero random entre 0 y 2 para escoger el indice del color
        let numberColor = parseInt(Math.random() * 3);
        //Asignamos un nuevo color al elemento (h5)
        this.style.color = changeColor(numberColor);
    })
}); 
