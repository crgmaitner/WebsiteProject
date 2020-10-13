const express = require('express')
const app = express()
app.use(express.static('client/public'));
const port = 1337

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/shop', function (req, res) {
    res.sendFile('shop.html', {root: './client/views'})
})

app.get('/account', function (req, res) {
    res.sendFile('account.html', {root: './client/views' })
})

app.get('/about', function (req, res) {
    res.sendFile('about.html', {root: './client/views'})
})

app.get('/cart', function (req, res) {
    res.sendFile('cart.html', {root: './client/views'})
})

app.listen(port, () => console.log(`Server listening on port ${port}.`))