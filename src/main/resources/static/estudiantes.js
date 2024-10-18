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


const navLinks = document.querySelectorAll('.navbar a');
const slider = document.querySelector('.slider');

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        slider.style.left = `${index * 33.33}%`;
    });
});
