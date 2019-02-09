// function add_face(){
//   var python = require("python-shell")
//   var path = require("path")
//   var name = document.getElementById("person").value
//
//     var options = {
//     scriptPath : path.join(__dirname, '/../engine/'),
//     pythonPath : '/usr/local/bin/python3',
//     args : ["cam", name]
//   }
//
//   var face = new python("add_face.py", options);
//
//   face.end(function(err, code, message) {
//     swal("Face added!", "We can now recognize your face", "success")
//     document.getElementsById("add").innerHTML = "message";
//   })
// }


// function getText(){
//   var python = require('python-shell')
//   let pyshell = new PythonShell('hello.py')
//   pyshell.end(function(err,code,signal){
//
//   })
// }

let {PythonShell} = require('python-shell')

PythonShell.run('Engine.py', null, function (err, results) {
  if(err)
  throw err
  console.log(results)

  // script finished
});
