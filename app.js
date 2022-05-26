const express = require('express');
const path = require('path');
const app = express();
const mainRutas = require('./routers/main');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRutas)

app.use('/about', mainRutas)


app.listen(3000);
