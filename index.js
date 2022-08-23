const express = require('express');
const app = express();

//Starting the server
const port = process.env.PORT || 3000
app.listen(port, () => console.info('Server started on port ' + port))
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json()); // responsavel pela conversão do inputs para json ou js 

app.get('/', (req,res)=>{
  res.send('Hello World')
})
app.get('/outroexemplo', (req,res)=>{
  res.json({message: 'hello outra rota qualquer'})
})