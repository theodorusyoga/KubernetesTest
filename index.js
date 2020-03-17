const express = require('express')
const mysql = require('mysql')
const fs = require('fs')
const app = express()

const print = console.log

const dotenv = require('dotenv');
dotenv.config();

const port = 80

const env = process.env.NODE_ENV || 'DEFAULT'
const sqlPass = process.env.MYSQL_PASSWORD
const sqlHost = process.env.MYSQL_HOST

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/environment', (req, res) => {
    return res.send(`Your environment is: ${env}`)
})

app.get('/dbtest', (req, res) => {
    const connection = mysql.createConnection({
        host: sqlHost,
        user: 'root',
        password: sqlPass,
        database: 'kubernetes_test',
        port: 3306,
        ssl: {
            ca: fs.readFileSync(__dirname + '/sql/server-ca.pem'),
            cert: fs.readFileSync(__dirname + '/sql/client-cert.pem'),
            key: fs.readFileSync(__dirname + '/sql/client-key.pem')
        }
    })
    connection.connect((err) => {
        console.log('MYSQL Error: ' + JSON.stringify(err))
        if(err) {
            return res.status(400).send('MySQL connection error with details: ' + JSON.stringify(err))
        } else {
            return res.send('MySQL connection success!')
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// TEST

const a = [1,2,3]

const allBelowZero = a.filter(num => num <= 0);
if (allBelowZero.length === a.length) { return 1; }

const sortedA = a.sort((a,b) => a-b)

for (let i = 0; i < sortedA.length - 1; i++) {
    const num = sortedA[i];
    const num2 = sortedA[i + 1];
    if (num2 > num + 1) {
        print(num + 1);
    }
}
print(sortedA[sortedA.length-1] + 1);


// NO 1

const B = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because.';

const sentences = B.split(/\?|\!|\./)

const wordsLength = [];

sentences.forEach(sentence => {
    const words = sentence.split(' ');
    const length = words.filter(word => word.length > 0).length;
    wordsLength.push(length);
});

print(wordsLength)

print('length max: ' + Math.max(...wordsLength));

// NO. 2

function solution(A, K) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[i] + 1 < A[i + 1])
            return false;
    }
    if (A[0] != 1 || A[n - 1] != K)
        return false;
    else
        return true;
}

print(solution([1,2,3,4,5,5,5,5,5,5,5,5], 5))
