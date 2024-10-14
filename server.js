//#include
const express = require("express");
const fs = require("fs");
const path = require ("path");

const app = express();
const port = 3000; //Porta do servidor


//Servindo arquivos estaticos:
app.use(express.static("public"));

//Obter informacoes dos itens
app.get('/combinados', (req, res) => {
    const itemsData = path.join(__dirname,"data","combinados.json");
    fs.readFile(itemsData, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler os dados.');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

//servindo o HTML
app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(port, () => {
        console.log('Servidor sendo executado no localhost porta ' + port);
});