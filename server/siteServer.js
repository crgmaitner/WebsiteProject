const express = require('express')
const app = express()
const port = 1337

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.listen(port, () => console.log(`Server listening on port ${port}.`))