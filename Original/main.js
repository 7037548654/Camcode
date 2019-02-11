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
  res.sendFile(path.join(__dirname+"/uploadfile.html"))
});

function ocr_detect(){
  var CloudmersiveOcrApiClient = require('cloudmersive-ocr-api-client');
  var fs  = require('fs');
  var defaultClient = CloudmersiveOcrApiClient.ApiClient.instance;

  // Configure API key authorization: Apikey
  var Apikey = defaultClient.authentications['Apikey'];
  Apikey.apiKey = "5d2c7635-f38e-453c-8e25-7fe2db351609"

  var api = new CloudmersiveOcrApiClient.ImageOcrApi()

  var apiInstance = new CloudmersiveOcrApiClient.PreprocessingApi();
  var imageFile = fs.readFileSync("C:\\Users\\akash chhetri\\Documents\\GitHub\\Camcode\\img\\Test1.jpg");
  var opts = {
    'language': "ENG" // String | Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  };


  var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      let d =JSON.stringify(data['TextResult'])
      fs.writeFile('ocr.txt', d, (err) => {
      // In case of a error throw err.
      if (err) throw err;
      })
    }
  };
  api.imageOcrPost(imageFile, opts, callback);
};

// app.post('/submitfile', function(req, res) {
//   console.log(req.body.file6);
//   res.send(200);
//
//   // sending a response does not pause the function
//   // ocr_detect();
// });
// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// })
// function UploadPhoto()
// {
// var attr = document.createAttribute("w3-include-html");
// var body = document.getElementById("MainBody");
// body.setAttribute("w3-include-html","uploadfile.html");
// includeHTML();
// }



//add the router
app.use('/', router);
app.listen(process.env.port || 8080);
console.log('Running at Port 8080');
