const express = require('express')
const app = express()
const port = 3000
var a = 1
var b = 2
var c = a + b
app.get('/tintuc', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})