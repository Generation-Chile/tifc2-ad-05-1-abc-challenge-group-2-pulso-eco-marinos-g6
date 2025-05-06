//- Make a function that applies a random 3 random colors- Green, Blue, and Red.// 
function getRandomcolor(){ ;//traducido (obten un color aleatorio)
  //definimos colores y que lo devuelva //
  function getRandomColor() {
    const colors = ['green', 'blue', 'red'];
    const definedcolors = Math.floor(Math.random() * colors.length);
    return colors[definedcolors];
  }
  
  // Agregar evento a todos los elementos <h5>
  document.querySelectorAll('h5').forEach(h5 => {
    h5.addEventListener('click', () => {
      h5.style.color = getRandomColor();
    });
  });

}
