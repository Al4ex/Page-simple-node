const express = require('express')
const app = express()
const path = require('path');
const { renderFile } = require('ejs');

//middleware

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

//rutas
app.use(require('./routes/index')
)
//statics files
app.use(express.static(path.join(__dirname, 'public')))

//escuchando el servidor
app.listen(app.get('port'), () => console.log(`Puerto`, app.get('port')))