//cambiar colores del navbar
const navbarCuenta = document.querySelector('.navbar-cuenta');
const navbarEstudiante = document.querySelector('.navbar-estudiante');
const navbarSoporte = document.querySelector('.navbar-soporte');

const navbars = [navbarCuenta, navbarEstudiante, navbarSoporte];

function actualizarColores(elementoClicado) {
    navbars.forEach(navbar => {
        if (navbar === elementoClicado) {
            navbar.style.color = "#FBF2EE";
        } else {
            navbar.style.color = "#1E3F56"; 
        }
    });
}

navbars.forEach(navbar => {
    navbar.addEventListener('click', () => {
        actualizarColores(navbar);
    });
});

//animacion del navbar cuando clickas
const navLinks = document.querySelectorAll('.navbar a');
const slider = document.querySelector('.slider');

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        slider.style.left = `${index * 33.33}%`;
    });
});

//carrusel
let indiceActual = 1;
const apartado = document.querySelectorAll('.carrusel .grid-container');
const totalApartados = apartado.length;

function mostrarApartado(apartado) {
    if (apartado >= totalApartados) {
        indiceActual = 0;
    } else if (apartado < 0) {
        indiceActual = totalApartados - 1;
    } else {
        indiceActual = apartado;
    }
    const offset = -indiceActual * 100;
    document.querySelector('.carrusel').style.transform = `translateX(${offset}%)`;
}

mostrarApartado(indiceActual);

function carruselBotones(apartado) {
    mostrarApartado(apartado);
}