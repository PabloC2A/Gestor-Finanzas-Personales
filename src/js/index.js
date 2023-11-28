document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const usuarios = [
      { username: 'pablo', password: '123456789' },
      { username: 'denis', password: '123456789' },
      { username: 'augusto', password: '123456789' }
    ];
  
    const usuario = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
  
    // Verificar credenciales
    const user = usuarios.find(user => user.username === usuario && user.password === contrasenia);
  
    if (user) {
      window.location.href = '../views/dashboard.html';
    } else {
      alert('Incorrecto');
    }
});
  