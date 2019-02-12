const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
var serveStatic = require('serve-static')
var formidable = require('formidable')
const multer = require('multer');
const ejs = require('ejs');

let filepath = ''



app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/node_modules")));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/Home.html',function(req,res){
  res.sendFile(path.join(__dirname+'/Home.html'));
});




// getting imageFile

app.get('/nodeuploads.ejs', (req, res) => res.render('nodeuploads.ejs'));
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + path.extname(file.originalname));
    global.filepath = './public/uploads/'+file.fieldname +  path.extname(file.originalname);
    console.log(global.filepath);
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  console.log(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

app.set('view engine', 'ejs');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('nodeuploads.ejs', {
          msg: 'Error: No File Selected!'
        });
      } else {
        //put ide path here
        console.log("calling ocr");

        // ****************************
        console.log("ocr definition reached")
        var CloudmersiveOcrApiClient = require('cloudmersive-ocr-api-client')
        var fs = require('fs');
        var defaultClient = CloudmersiveOcrApiClient.ApiClient.instance;

        // Configure API key authorization: Apikey
        var Apikey = defaultClient.authentications['Apikey'];
        Apikey.apiKey = "5d2c7635-f38e-453c-8e25-7fe2db351609" //add 9

        var api = new CloudmersiveOcrApiClient.ImageOcrApi();

        
        var imageFile = Buffer.from(fs.readFileSync(global.filepath).buffer);
        // console.log(imageFile)
        var opts = {
          'language': "ENG", // String | Optional, language of the input document, default is English (ENG). 
          'preprocessing': "Auto"
        };


        var callback = function (error, data, response) {
          console.log("inside callback")
          if (error) {
            console.error(error);
          } else {
            console.log('API called succesfully');
            
            // console.log(data['TextResult'])

            res.render('IDE.ejs', {
              msg: JSON.stringify(data['TextResult']),
              // msg: 'File Uploaded!',
              file: `uploads/${req.file.filename}`
            });

          }
        };
        
        console.log("Waiting for response from image ocr")
        api.imageOcrPost(imageFile, opts, callback);
        
        // res.render('IDE.ejs', {
        //   msg: 'Hello World',
        //   // msg: JSON.stringify(data['TextResult']),
        //   // msg: 'File Uploaded!',
        //   file: `uploads/${req.file.filename}`
        // });
      }
    }
  });
});









//add the router
app.use('/', router);
app.listen(process.env.port || 8080);
console.log('Running at Port 8080');
