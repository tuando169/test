const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const api = require('./routes/api')

const route = require('./routes')
const db = require('./config/db')

const app = express()
const port = 3000

//connect to db
db.connect()

app.use(express.static(__dirname + '/public'))

app.use(morgan('dev'))

app.use(methodOverride('_method'))

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

app.engine(
  'hbs',
  handlebars.engine({
    extname: 'hbs',
  })
)
app.set('view engine', 'hbs')
app.set('views', __dirname + '/resources/views')

//init api
api(app)

//routes init
route(app)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
