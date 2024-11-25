// Cambiar colores del navbar
const navbarCuenta = document.querySelector(".navbar-cuenta");
const navbarSecretaria = document.querySelector(".navbar-secretaria");
const navbarSoporte = document.querySelector(".navbar-soporte");

const navbars = [navbarCuenta, navbarSecretaria, navbarSoporte];

function actualizarColores(elementoClicado) {
  navbars.forEach((navbar) => {
    if (navbar === elementoClicado) {
      navbar.style.color = "#FBF2EE";
    } else {
      navbar.style.color = "#1E3F56";
    }
  });
}

navbars.forEach((navbar) => {
  navbar.addEventListener("click", () => {
    actualizarColores(navbar);
  });
});

// Animación del navbar cuando clickas
const navLinks = document.querySelectorAll(".navbar a");
const slider = document.querySelector(".slider");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    slider.style.left = `${index * 33.33}%`;
  });
});

// Carrusel
let indiceActual = 1;
const apartados = document.querySelectorAll(".carrusel .grid-container");
const totalApartados = apartados.length;

function mostrarApartado(apartado) {
  if (apartado >= totalApartados) {
    indiceActual = 0;
  } else if (apartado < 0) {
    indiceActual = totalApartados - 1;
  } else {
    indiceActual = apartado;
  }
  const desplazar = -indiceActual * 100;
  document.querySelector(
    ".carrusel"
  ).style.transform = `translateX(${desplazar}%)`;
}

mostrarApartado(indiceActual);

function carruselBotones(apartado) {
  mostrarApartado(apartado);
}

//opcion proceso principal
document.getElementById('opcion-proceso').addEventListener('change', function() { 
  const contenedores = document.querySelectorAll('.opcion'); 
  contenedores.forEach(opcion => opcion.style.display = 'none'); 
  const selectedValue = this.value; 
  const contenedorSeleccionado = document.querySelector(`.opcion-${selectedValue}`); 
  if (contenedorSeleccionado) { 
    contenedorSeleccionado.style.display = 'block'; 
  } 
});

// // registro con respondiente a su rol
// document.getElementById('roles').addEventListener('change', function() { 
//   const contenedores = document.querySelectorAll('.rol'); 
//   contenedores.forEach(rol => rol.style.display = 'none'); 
//   const selectedValue = this.value; 
//   const contenedorSeleccionado = document.querySelector(`.rol-${selectedValue}`); 
//   if (contenedorSeleccionado) { 
//     contenedorSeleccionado.style.display = 'block'; 
//   } 
// });

// document.getElementById('mostrar-proceso').addEventListener('click', function() { 
//   const proceso = document.getElementById('proceso-matricula').value;
//   const contenedores = document.querySelectorAll('.opcion'); 

//   contenedores.forEach(opcion => opcion.style.display = 'none'); 
  
//   if (proceso) {
//     const contenedorSeleccionado = document.getElementById(`contenedor-${proceso}`); 
//     if (contenedorSeleccionado) { 
//       contenedorSeleccionado.style.display = 'block'; 
//     }
//   }
// });


//ocultar campos cuando se vaya a registrar
document.getElementById('proceso-registro').addEventListener('change', function() { 
  const proceso = this.value;
  const field = document.getElementById("field");
  
  if (proceso === "matricular") {
    field.style.display = "none";
  } else {
    field.style.display = "block";
  }
});





// Ampliar y quitar apartados
const apartadosGrid = document.querySelectorAll(".contenedor-tablas-main");
const fondoApartados = document.querySelector(".fondo-apartados-grid");
const cerrar = document.querySelector(".cerrar-fondo-apartados-grid");
const contenedor = document.querySelector(".contenedor-apartados-grid");

apartadosGrid.forEach((apartado) => {
  apartado.addEventListener("click", () => {
    fondoApartados.style.display = "block";
    contenedor.innerHTML = ""; // Limpia contenido previo
    const copiaApartado = apartado.cloneNode(true);
    copiaApartado.style.cursor = "default";
    copiaApartado.style.overflow = "auto";
    contenedor.appendChild(copiaApartado);
  });
});

cerrar.addEventListener("click", () => {
  fondoApartados.style.display = "none";
  contenedor.innerHTML = ""; // Limpia contenido al cerrar
});

// Cambiar contraseña y cerrar sesión
const cambiarContraseña = document.querySelector(".item1");
const mostrarCambiarContraseña = document.querySelector(
  ".contenedor-cambiar-contraseña"
);
const cerrarSesion = document.querySelector(".item2");
const mostrarCerrarSesion = document.querySelector(".contenedor-cerrar-sesion");
const noCerrarSesion = document.querySelector(".boton-no-cerrar-sesion");

cambiarContraseña.addEventListener("click", () => {
  fondoApartados.style.display = "block";
  contenedor.innerHTML = ""; // Limpia contenido previo
  contenedor.append(mostrarCambiarContraseña);
  mostrarCambiarContraseña.style.display = "block";
});

cerrarSesion.addEventListener("click", () => {
  fondoApartados.style.display = "block";
  contenedor.innerHTML = ""; // Limpia contenido previo
  contenedor.append(mostrarCerrarSesion);
  mostrarCerrarSesion.style.display = "block";
});

cerrar.addEventListener("click", () => {
  fondoApartados.style.display = "none";
  contenedor.innerHTML = ""; // Limpia contenido
});

noCerrarSesion.addEventListener("click", () => {
  fondoApartados.style.display = "none";
  contenedor.innerHTML = ""; // Limpia contenido
});
