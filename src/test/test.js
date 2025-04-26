// ✅ Usamos require en lugar de import para compatibilidad directa
const { login } = require('../utils/auth');
const users = require('../Data/users.json'); // Ahora cargamos todos los usuarios

// Test 1: Usuario incorrecto
console.log('🔴 Prueba 1: Usuario incorrecto');
const resultado1 = login('usuario_falso', 'clave_falsa');
console.assert(!resultado1.success, '❌ Debe fallar el login con usuario incorrecto');
if (!resultado1.success) {
  console.log('✅ Resultado esperado: Acceso denegado');
} else {
  console.log('❌ Resultado inesperado: Acceso permitido');
}

// Test 2: Usuarios correctos (probar toda la lista)
console.log('\n🟢 Prueba 2: Usuarios correctos');

users.forEach(user => {
  const resultado = login(user.username, user.password);
  console.assert(resultado.success, `❌ Debe loguear correctamente a ${user.nombre}`);
  if (resultado.success) {
    console.log(`✅ Resultado esperado: Bienvenido ${resultado.user}`);
  } else {
    console.log(`❌ Resultado inesperado: Acceso denegado para ${user.nombre}`);
  }
});
