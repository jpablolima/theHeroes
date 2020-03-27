const express = require('express');

const app = express();

app.get('/',(require, response) =>  {
    return response.json({
        evento: "ola mundo",
        nome: 'João Pablo'
    });
}); 
app.listen(3333);