const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
var serveStatic = require('serve-static')

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/node_modules")));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/Home.html',function(req,res){
  res.sendFile(path.join(__dirname+'/Home.html'));
});
router.get('/uploadfile.html',function(req,res){
  res.sendFile(path.join(__dirname+'/uploadfile.html'));
});

// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);
console.log('Running at Port 8080');
