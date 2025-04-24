
const users = require('../Data/users.json'); // Asegúrate de que la ruta sea correcta


function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user
    ? { success: true, user: user.nombre }
    : { success: false, message: "Credenciales inválidas" };
}

module.exports = { login };
