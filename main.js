const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
var serveStatic = require('serve-static')
// var server = http.createServer(function(request, response) {
//     var path = url.parse(request.url).pathname;
//         fs.readFile(__dirname + "\\prev\\web\\Home.html", function(error, data) {
//             if (error) {
//                 response.writeHead(404);
//                 response.write(error);
//                 response.end();
//             } else {
//                 response.writeHead(200, {
//                     'Content-Type': 'text/html'
//                 });
//                 response.write(data);
//                 response.end();
//             }
//         });
// });
// server.listen(8082);
app.use(express.static(path.join(__dirname,"/public")));

app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
router.get('/',function(req,res){
  res.render(path.join(__dirname+"/demopage1.html"));
  //__dirname : It will resolve to your project folder.
});
app.get('/css/styles.css', function(req, res){ res.send('css/styles.css'); res.end(); });

// app.use(express.static(__dirname,"/public"))

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });
//
// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);
console.log(path.join(__dirname,"/public/css"));
console.log('Running at Port 8080');
