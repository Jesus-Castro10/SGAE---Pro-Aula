//cambiar colores del navbar
const navbarCuenta = document.querySelector('.navbar-cuenta');
const navbarEstudiante = document.querySelector('.navbar-estudiante');
const navbarCalificacion = document.querySelector('.navbar-calificacion');
const navbarSoporte = document.querySelector('.navbar-soporte');


const navbars = [navbarCuenta, navbarEstudiante, navbarCalificacion, navbarSoporte];

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
        slider.style.left = `${index * 25}%`;
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

//Registrar calificaciones
function registrarcalificacion(button) {
    const fila = button.closest('tr');
    const fallas = fila.querySelector('.fallas').value;
    const nota1 = fila.querySelector('.notas-1').value;
    const nota2 = fila.querySelector('.notas-2').value;
    const nota3 = fila.querySelector('.notas-3').value;
    const errormsg = fila.querySelector('#error-msg').value;
    //validacion de que el calificacion sea menor de 5 y mayor que 0
    if (isNaN(nota1) || nota1 < 0
        || nota1 > 5 || isNaN(nota2)
        || nota2 < 0 || nota2 > 5
        || isNaN(nota3) || nota3 < 0
        || nota3 > 5) {

        alert("Hay errores en el formulario. Por favor, corrígelos antes de guardar.");

        //limpiar campos de texto luego del mensaje error
        fila.querySelectorAll('input[type="number"]').forEach(input => input.value = " ");
    } else {


        //campos no editables
        fila.querySelectorAll('input[type="number"]').forEach(input => input.readOnly = true);
        // Calcular el promedio 
        const promedio = ((parseFloat(nota1) || 0) + (parseFloat(nota2) || 0) + (parseFloat(nota3) || 0)) / 3;
        fila.querySelector('.promedio').value = promedio.toFixed(1);
        console.log(`Fallas: ${fallas}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, 
   Promedio: ${promedio.toFixed(2)}`); alert('Información guardada correctamente');
    }
}

//modificar calificaciones
function modificarcampos(button) {
    const fila = button.closest('tr');

    //campos editables otra vez
    fila.querySelectorAll('input[type="number"]').forEach(input => input.readOnly = false);

    alert('Ya Puedes editar las calificaciones')


}


//ampliar y quitar apartados 
let apartadosGrid = document.querySelectorAll('.contenedor-tablas-main');
let fondoApartados = document.querySelector('.fondo-apartados-grid');
let cerrar = document.querySelector('.cerrar-fondo-apartados-grid');
let contenedor = document.querySelector('.contenedor-apartados-grid');

apartadosGrid.forEach(apartado => {
    apartado.addEventListener('click', () => {
        fondoApartados.style.display = 'block';
        apartado.style.overflowY = 'auto';
        apartado.style.overflowX = 'auto';
        apartado.style.perspective = '1000000px';
        let copiaApartado = apartado.cloneNode(true);
        copiaApartado.removeEventListener('click', null);
        copiaApartado.style.cursor = 'default';
        contenedor.appendChild(copiaApartado);
    });
    cerrar.addEventListener('click', () => {
        apartado.style.overflowY = 'hidden';
        apartado.style.overflowX = 'hidden';
        contenedor.innerHTML = '';
        fondoApartados.style.display = 'none';
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