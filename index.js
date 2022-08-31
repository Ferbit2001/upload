let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let fileupload = require('express-fileupload')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(fileupload())

app.use('/',express.static(__dirname+'/public'))
app.post('/upload',(req,res)=>{
    let file = req.files.file
    file.mv(`./upload/${file.name}`,err => {
        if(err) return res.status(500).send({ message : err })
        return res.status(200).send({ message : 'File upload' })
    }) 
})
app.get('/download/:name',(req,res)=>{
    let name = req.params.name
    res.download(`./upload/${name}`)
})
app.listen('3000',()=>{console.log('Server Running on port: 3000')})