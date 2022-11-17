const express = require('express');
const app = express();
const router = express.Router();
const miPassport = require('./miPassport.js')
const port = 3001;

router.get('/', miPassport.authenticate('jwt',{session: false}),(req,res) => {
  res.end("Hola Usuario Autenticado");
});

app.use(router);

app.listen(port, (err) => {
  if(err) console.log (e);
  else console.log("Server en puerto",port);
});