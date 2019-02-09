var myPythonScriptPath = 'hello.py';
var output = null;

// Use python shell
var {PythonShell} = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);

var options = {
    mode: 'text',
    // args: ['my First Argument', 'My Second Argument', '--option=123']
};

PythonShell.run(myPythonScriptPath, options, function (err, results) {
    if (err) throw err;
    output = results
    console.log(output);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
    if (err){
      throw err;
};
});
