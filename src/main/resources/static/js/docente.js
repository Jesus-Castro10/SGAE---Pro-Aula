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
    const desplazar = -indiceActual * 100;
    document.querySelector('.carrusel').style.transform = `translateX(${desplazar}%)`;
}

mostrarApartado(indiceActual);

function carruselBotones(apartado) {
    mostrarApartado(apartado);
}


//ampliar y quitar apartados 
let apartadosGrid = document.querySelectorAll('.contenedor-tablas-main');
let fondoApartados = document.querySelector('.fondo-apartados-grid');
let cerrar = document.querySelector('.cerrar-fondo-apartados-grid');
let contenedor = document.querySelector('.contenedor-apartados-grid');
let seleccionarAño = document.querySelector('.contenedor-tabla-historial-academico-titulo-derecha select');

apartadosGrid.forEach(apartado => {
    apartado.addEventListener('click', () => {
        fondoApartados.style.display = 'block';
        apartado.style.perspective = '1000000px';
        seleccionarAño.disabled = false;
        let copiaApartado = apartado.cloneNode(true);
        copiaApartado.style.justifyItems = 'left';
        copiaApartado.style.overflowY = 'auto';
        copiaApartado.style.overflowX = 'auto';
        copiaApartado.removeEventListener('click', null);
        copiaApartado.style.cursor = 'default';
        contenedor.appendChild(copiaApartado);
    });
    cerrar.addEventListener('click', () => {
        contenedor.innerHTML = '';
        fondoApartados.style.display = 'none';
        seleccionarAño.disabled = true;
    });
});

let cambiarContraseña = document.querySelector('.item1');
let mostrarCambiarContraseña = document.querySelector('.contenedor-cambiar-contraseña');
let cerrarSesion = document.querySelector('.item2');
let mostrarCerrarSesion = document.querySelector('.contenedor-cerrar-sesion');
let noCerrarSesion = document.querySelector('.boton-no-cerrar-sesion');

cambiarContraseña.addEventListener('click', () => {
    fondoApartados.style.display = 'block';
    contenedor.append(mostrarCambiarContraseña);
    mostrarCambiarContraseña.style.display = 'block';
});
cerrarSesion.addEventListener('click', () => {
    fondoApartados.style.display = 'block';
    contenedor.append(mostrarCerrarSesion);
    mostrarCerrarSesion.style.display = 'block';
});
cerrar.addEventListener('click', () => {
    fondoApartados.style.display = 'none';
    contenedor.innerHTML = '';
});
noCerrarSesion.addEventListener('click', () => {
    fondoApartados.style.display = 'none';
    contenedor.innerHTML = '';
});