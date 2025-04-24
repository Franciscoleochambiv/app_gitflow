// ✅ Usamos require en lugar de import para compatibilidad directa
const { login } = require('../utils/auth');

// Test 1: Usuario incorrecto
console.log('🔴 Prueba 1: Usuario incorrecto');
const resultado1 = login('usuario_falso', 'clave');
console.assert(!resultado1.success, '❌ Debe fallar el login con usuario incorrecto');
if (!resultado1.success) {
  console.log('✅ Resultado esperado: Acceso denegado');
} else {
  console.log('❌ Resultado inesperado: Acceso permitido');
}

// Test 2: Usuario correcto
console.log('\n🟢 Prueba 2: Usuario correcto');
const resultado2 = login('francisco', '123456'); // Asegúrate que estos datos existen en tu users.json
console.assert(resultado2.success, '❌ Debe loguear correctamente a Francisco');
if (resultado2.success) {
  console.log(`✅ Resultado esperado: Bienvenido ${resultado2.user}`);
} else {
  console.log('❌ Resultado inesperado: Acceso denegado');
}
