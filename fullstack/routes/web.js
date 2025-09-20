import express from "express"

const web = express.Router()

web.get('/', (req,res) => {
    res.render('index')
})

web.get('/:usernam', (req, res) =>{
    res.render('public-profile')
})

export default web