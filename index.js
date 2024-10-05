//En esta parte agrego la alerta al hacer click en iniciar sesión.//

document.getElementById('iniciarSesion').onclick = function(){
    alert('Inicio de Sesión exitoso');
}

//En esta parte hago que el titulo de "Todos Los Libros" cambie dependiendo el genero en el que apretemos.//
function cargarGenero(todosLosLibros){
    console.log(todosLosLibros.innerText);

    document.querySelector("#todosLosLibros").innerText = todosLosLibros.innerText;
}

//Aqui hago que los botones de "Rentar" al precionarlo cambien a "No Disponible separando const por cada boton"

const botones = document.getElementById('botonUno');
document.getElementById('botonUno').addEventListener('click', function() {
    this.textContent = this.textContent === 'Rentar' ? 'No Disponible' : 'No Disponible';
    botones.style.background = 'red' ;//colores de donfo del boton
    botones.style.color = 'white';// color de la palabra
})

const botones1 = document.getElementById('botonDos');
document.getElementById('botonDos').addEventListener('click', function() {
    this.textContent = this.textContent === 'Rentar' ? 'No Disponible' : 'No Disponible';
    botones1.style.background = 'red' ;
    botones1.style.color = 'white';
})

const botones2 = document.getElementById('botonTres');
document.getElementById('botonTres').addEventListener('click', function() {
    this.textContent = this.textContent === 'Rentar' ? 'No Disponible' : 'No Disponible';
    botones2.style.background = 'red' ;
    botones2.style.color = 'white';
})