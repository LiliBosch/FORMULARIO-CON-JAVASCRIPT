function ingresar(){
    const valorNombre = document.getElementById('nombre').value;
    const valorApellido = document.getElementById('apellido').value;
    const valorEmail = document.getElementById('email').value;
    const valorHombre = document.getElementById('hombre').value;
    const valorMujer = document.getElementById('mujer').value;

    const object = {
        nombre: valorNombre,
        usuario: valorApellido,
        email: valorEmail,
        hombre: valorHombre,
        mujer: valorMujer,
    }

    console.log(object)

}