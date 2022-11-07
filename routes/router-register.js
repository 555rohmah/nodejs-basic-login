// Definisikan router dari express
const router = require('express').Router();
// Ambil index.js dari controller dan panggil variabel di dalamnya
const registerController = require('../controllers').register;
// Definisikan middleware verify.js
const verifyUser = require('../configss/verify');

// Rute 'http://localhost:5050/register/' digunakan untuk menampilkan form register
router.get('/', verifyUser.isLogout, registerController.formRegister);
// Rute 'http://localhost:5050/register/save' di gunakan untuk menyimpan data yang di input user saat register
router.post('/save', verifyUser.isLogout, registerController.saveRegister);

// Export agar dapat di baca oleh express
module.exports = router;