var exec = require('child_process').exec, child;

var ub;
child = exec('pwd',

  function (error, stdout, stderr) {

    console.log(stdout);
    var cadena = stdout
    var separador = "\n"
    var arregloDeSubCadenas = cadena.split(separador);
    console.log('-'+arregloDeSubCadenas[0]+'-')
    var com = arregloDeSubCadenas[0]+'/data.html'
    exec('cp '+ 'templates/h.html '+com)
    // controlamos el error
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});


