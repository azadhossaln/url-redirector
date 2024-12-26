const express = require('express');

const app = express();
const codes = [ '0b2a', '1ace', '04b7', '9314', '02b4', '03aa', 'd24b', 'f6bb', '31d0', '70db', ]
const url = 'https://www.profitablecpmrate.com/tnhij6h2?key=735150c105a8e9c6df4ce893fd289ffa';
//const url = 'http://localhost:4000/'

app.get('/publisher/:id', (req, res, next) => {
    const id = req.params.id
    if(codes.indexOf(id) === -1) return res.sendStatus(444)
    res.redirect(url)
});

app.get('*', (req, res, next) => {
    res.sendStatus(444)
})

app.listen(3000, () => {
    console.log('app running on http://localhost:3000/')
})
