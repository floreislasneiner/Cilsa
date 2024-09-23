
window.addEventListener('load', () => {
    const form = document.getElementById('Formulario'); 
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const mail = document.getElementById('email');
    const fechaNacimiento = document.getElementById('fecha');
    const paisRecidencia = document.getElementById('pais');
    const LEGAL_AGE = 18;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (nombre.value.length < 2 || nombre.value.length > 50){
           alert('nombre invalido')
        }
        if (apellido.value.length < 2 || apellido.value.length > 50){
            alert('apellido invalido')
         }
         if (pais.value.length < 2 || pais.value.length > 50){
            alert('Pais invalido')
         }
         const getAge = (fechaNacimiento) => Math.floor((new Date() - new Date(fechaNacimiento).getTime()) / 3.15576e+10)
         if (getAge(fechaNacimiento.value) < LEGAL_AGE) {
            alert('Tienes que ser mayor de 18 años para registrar tus datos');
            return false;
        }

        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (validEmail.test(email.value)) { 
            return true;
        } else {
            alert('Email no es válido, no se envía el formulario');
            return false;
        }
    });
});
