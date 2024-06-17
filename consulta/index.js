const express = require("express");
const mysql = require('mysql2');
require("dotenv").config();
const app = express();
app.use(express.json());

app.get("/pizzaria_saporedipizza", (req, res) => {
    const connection = mysql.createConnection({
        host:'127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'SaporeDiPizza'
    });

    connection.querry('select * from tb_itens_pedido', (err, results, fields) => {
        console.log(results);
        console.log(fields);
        res.send('ok');
    });
});

const porta = 3000;
app.listen(porta, () => console.log(`Escutando na porta ${porta}`));