//definisi library yang di gunakan 
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('req-flash');
const app = express();

//definisi lokasi file router
const loginRoutes = require('./src/routes/router-login');
const registerRoutes = require('./src/routes/router-register');
const appRoutes = require('./src/routes/router-app');

//configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//configurasi library session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 't@1k0ch3ng',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 60000
    },
}))
app.use(flash());

//setting folder views
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

//gunakan routes yang telah didefinisikan
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/', appRoutes);

//gunakan port server
app.listen(5050, ()=>{
    console.log('Server Berjalan di Port : '+5050);
});