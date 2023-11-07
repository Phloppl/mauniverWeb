
const express = require('express')
const path = require("path")
const fs =require("fs")
const {urlencoded} = require("express");
const app = express()
const port = 3000
app.use("/style", express.static('style'))
app.use("/JS", express.static('JS'))
app.use(express.json())
app.use(express.urlencoded())
app.get('*', (req, res) => {
    res.sendFile("finish-him.html", {root: path.join (__dirname)})
})
app.post('/reg-data', (req, res) => {
    console.log(">>>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err)=>{
        if(err){
            res.status(500).send("user not added")
        }
        else{
            res.status(200).send("user added")
        }
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
