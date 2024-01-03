let express = require('express')
let ejs = require('ejs')
let app = express()
let bodyParser = require('body-parser')
let fileUpload=require('express-fileupload')
let port=9870

app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs')
//middleware.
app.use(bodyParser.json());
app.use(fileUpload());

 app.get('/', function(req, res){
    res.render('index')
 })

 app.post('/profile', function(req, res){
 console.log(req.body)
 console.log(req.files) 
 const imageFile =req.files.yourImage;
 imageFile.mv(`${__dirname}/public/images/${imageFile.name}`,(err, data)=>{
if(err) throw err;
    res.render('display',{title:req.body.uname,image:`${imageFile.name}`})
})
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is listening on the port ${port}`)
})