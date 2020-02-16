const express = require('express')
const app = express()
const port = 3000

const env = process.env.NODE_ENV || 'DEFAULT'

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/environment', (req, res) => res.send(`Your environment is: ${env}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))