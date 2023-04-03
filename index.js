const express = require('express');
const cors = require('cors');
const routeApi = require('./routes');
require("express-async-errors");


const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();

const port = 3000;

app.use(express.json());

const whiteList = ['http:locahost:8080', 'https//myapp.co'];
const option = {
  origin: (origin, callbakc) => {
    if (whiteList.includes(origin)){
      callbakc(null, ture);
    }else{
      callbakc(new Error('No permitido'));
    }
  }
}
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});







routeApi(app);

app.listen(port, ()=> {
  console.log('Mi port '+ port);
});
app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);




