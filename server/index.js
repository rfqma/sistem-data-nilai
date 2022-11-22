const mysql = require('mysql')
const cors = require('cors')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

const bcrypt = require('bcrypt')
const saltRounds = 10


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(session({
    key: "userId",
    secret: "kriptografi",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))



// DEKLARASI DATABASE
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'db_sekolah'
})
// END OF DEKLARASI DATABASE

// POST REGISTER
app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {


        if (err) {
            console.log(err)
        }
        db.query("INSERT INTO login (username, password) VALUES (?, ?)", [username, hash],
            (err, result) => {
                console.log(err)
            })
    })
})
// END OF POST REGISTER

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})

// POST LOGIN
app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM login WHERE username = ?",
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result
                        console.log(req.session.user)
                        res.send(result)
                    } else {
                        res.send({ message: "Wrong username/password combination!" })
                    }
                })
            } else {
                res.send({ message: "User Doesnt Exist" })
            }
        })
})
// END OF POST LOGIN

// POST FORM DATA
app.post('/form-data', (req, res) => {
    const nis = req.body.nis
    const namaSiswa = req.body.namaSiswa
    const kelasSiswa = req.body.kelasSiswa
    const nilaiMatematika = req.body.nilaiMatematika
    const nilaiBindonesia = req.body.nilaiBindonesia
    const nilaiBinggris = req.body.nilaiBinggris
    const nilaiIpa = req.body.nilaiIpa

    db.query("INSERT INTO data_nilai (nis, namaSiswa, kelasSiswa, nilaiMatematika, nilaiBindonesia, nilaiBinggris, nilaiIpa) VALUES (?,?,?,?,?,?,?)",
        [nis, namaSiswa, kelasSiswa, nilaiMatematika, nilaiBindonesia, nilaiBinggris, nilaiIpa],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        })
})
// END OF POST FORM DATA

// GET VIEW DATA
app.get("/view-data", (req, res) => {
    db.query("SELECT * FROM data_nilai", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
// END OF GET VIEW DATA

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})