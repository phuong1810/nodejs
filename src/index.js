const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.engine('.hbs', engine({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  console.log(req.query.q)
  res.render('search')
})

app.post('/search', (req, res) => {
  console.log(req.body.q)
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})