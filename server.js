const express = require('express')
const app = express()
const port = 3000

const { Pool } = require('pg')
const db = new Pool({
    user: 'sakdahomhuan',
    host: 'localhost',
    database: 'geodb',
    password: '1234',
    port: 5432
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

app.use(express.static('www'))

app.get('/api/getdata', (req, res) => {
    let sql = "SELECT * FROM survey"
    db.query(sql).then((r) => {
        // console.log(r.rows);
        res.json({ data: r.rows })
    })
})

