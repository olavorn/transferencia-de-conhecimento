const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
  res.send('Hello World! Tudo Bem?')
})

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, './public/formulario.html') );
})

app.get('/pwa', (req, res) => {
  res.sendFile(path.join(__dirname, './public/pwa.html') );
})

app.get('/respostaFormulario', (req, res) => {
    var resposta = `Olá ${req.query.nome}! Tudo Bem? `;
    
    let frase = req.query.frase
    if (!frase){
        return;
    }

    if ( frase.toLowerCase() == "que a força esteja com você") {
        resposta = `Que a força esteja com você, meu amigo ${req.query.nome}.`;
    }

    res.send( { resposta : resposta  } );

  })

app.get('/respostaFormularioHtml', (req, res) => {
    let resposta = fs.readFileSync(path.join(__dirname, 'public/resposta.html'), 'utf8')
    
    resposta = resposta.replace("{nome}", req.query.nome);
    resposta = resposta.replace("{nome}", req.query.nome);//como tem nome em 2 lugares, tem que haver 2 replaces
    var frase = req.query.frase;
    if (frase){
        if ( frase.toLowerCase() == "que a força esteja com você") {
            resposta = resposta.replace("{script}", "window.force = true;");
        }
    }
    
    resposta = resposta.replace("{script}", '');
    
    return res.send(resposta);
  });




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})