const express = require('express')
const app = express()
const port = 3000;

app.use(express.static("C:\Dev\transferencia-de-conhecimento\transf2\Static"));

//app.get("/", express.static("Static"))

// app.get("/", function(req, res){
//     console.log(`Executada requisição!!!`);
//     res.send('Hello World! Tudo Bem?');
// });

app.listen(port, () => {
    console.log(`Aplicação escutando na porta http://localhost:${port}`)
})