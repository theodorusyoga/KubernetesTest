const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const env = process.env.NODE_ENV || 'DEFAULT'
const sqlPass = process.env.MYSQL_PASSWORD

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/environment', (req, res) => {
    return res.send(`Your environment is: ${env}`)
})

app.get('/dbtest', (req, res) => {
    const connection = mysql.createConnection({
        host: 'mysql',
        user: 'root',
        password: sqlPass,
        database: 'kubernetes_test',
        port: 3306
    })
    connection.connect((err) => {
        if(err) {
            return res.status(400).send('MySQL connection error')
        } else {
            return res.send('MySQL connection success!')
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))