function VerContraseña() { 
    const passwordField = document.getElementById("password"); 
      if (passwordField.type === "password") { passwordField.type = "text"; } 
      else { passwordField.type = "password"; } 
    }


function RecuperarContraseña() {
    const recuperarCuentaDiv= document.getElementById('Recuperar-cuenta');
    const ocultarloginDiv= document.getElementById('login-container');

    recuperarCuentaDiv.style.display = 'block'; 
    ocultarloginDiv.style.display ="none";

}

// Funciones para consultar y enviar correo de recuperacion

    //   function buscarusuario(){

    //          const Usuarioexiste=true;
    //  }

    // if(Usuarioexiste){
    //     document.getElementById('email').style.display='block';
    //     document.getElementById('user').style.display='none';
            

    //      } else{
    //     alert("USUARIO NO EXISTE.");
    // }
    
