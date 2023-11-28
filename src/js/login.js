// document.getElementById (Lo obtiene el formulario que se encuebtra en la pagina de html)
// addEventListener (permite registrar un evento a un objeto específico en este caso un click)
// preventDefault (para cancelar un accion predeterminado)
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const usuarios = [
      { username: 'pablo', password: '123456789' },
      { username: 'denis', password: '123456789' },
      { username: 'augusto', password: '123456789' }
    ];
// document.getElementById('username'): obtiene la referencia del elemento HTML con id="username". Normalmente un campo <input> en un formulario.
// .value: obtiene el valor actual contenido en ese campo input. Es decir lo que haya ingresado el usuario en ese campo.
    const usuario = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
  
    // Verificar credenciales
    // .find(): Es un método de JavaScript que se utiliza para buscar en un arreglo. 
    // Devuelve el primer elemento que cumple con la condición especificada.
    const user = usuarios.find(user => user.username === usuario && user.password === contrasenia);
  
  
    if (user) {
      window.location.href = '../views/inicio.html';
    } else {
      alert('Incorrecto');
    }
});
  