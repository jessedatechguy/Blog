const express = require('express')
const path = require('path')

const PORT = 5000

const app = express()

app.use(express.static(__dirname + '/blog/BLOG'))

app.get('/*', (req, res) => {
    res.sendfile(path.join(__dirname));
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`)
})