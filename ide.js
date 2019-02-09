var request = require('request');

var program = {
    script : "ABC.java",
    language: "java",
    versionIndex: "2",
    clientId: "9c98247f6303fdd5c40bb868602b80de",
    clientSecret:"c75c17c6f49558818b94574a94fb22e7f3b2c1174be3ec3706fcb24a9e1c9158"
};
request({
    url: 'https://api.jdoodle.com/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
