const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()
const port = 5000
const route = require('./routes')
const db = require('./config/db')

//conect db
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.engine('.hbs', engine({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'resources','views'))

//Routers init
route(app)


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})