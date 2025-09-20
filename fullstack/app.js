import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send("Hello Word")
})

app.get('/mahasiswa',(req, res)=>{
    res.send("Halaman Mahasiswa 1212121")
})

app.get ('/mahasiswa/:npm/:age',(req, res)=>{
    const npm = req.params.npm
    const age = req.params.age

    res.send(`Npm : ${npm}, umur :${age}`)
})

app.get ('/mahasiswa-optional{/:npm}',(req, res)=>{
    const npm = req.params.npm ?? 'Tanpa NPM'

    res.send(`Npm : ${npm}`)
})

app.get ('/search-mahasiswa',(req, res)=>{
    res.send("search Mahasiswa")
})

app.get ('/status' ,(req, res)=>{
    res.send("<h1>Server is running</h1>")
})

app.get ('/profile/{:npm}',(req, res)=>{
    const npm = req.params.npm ?? 'Tanpa NPM'
    const profile = {
        npm : nama,
        nama : "NAMA"
    }
    res.status(200).json(profile)
})

app.listen("3000", () => {
    console.log("App berjalan di : http://localhost:3000");
})