function Login() {
    const usuario = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;

    if (usuario === 'pepito' && contrasenia === '123') {
        alert('Exitoso')
        window.location.href = '/views/dashboard.html';
    } else {
        alert('Incorrecto')
    }
}