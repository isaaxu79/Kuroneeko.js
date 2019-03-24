
var exec = require('child_process').exec, child;
const chalk =require('chalk');
  const clear = require('clear');
  const figlet = require('figlet')
  const inquirer = require('inquirer')
  const shell = require('shelljs')
module.exports = async (args) => {

  

  clear();

  console.log(
    chalk.green(
      figlet.textSync('Kuroneeko')    
    )
  ) 
  inquirer
  .prompt([
    {
        name : 'list',
        type : 'list',
        message : '¿Que quieres en el encabezado?',
        choices : [
            {
                name : 'Navbar',
                type : 'checkbox',
                message : 'nav',
                value : '1'
            },
            {
                name : 'Sin encabezado',
                type : 'checkbox',
                message : 'void',
                value : '2'
            }
        ]
    }
  ])
  .then(answers => {
     contenidoSin(answers.list,args._[1])
  });

}

function contenidoSin(select,name){
  inquirer
  .prompt([
    {
        name : 'list',
        type : 'list',
        message : '¿Que quieres en el cuerpo?',
        choices : [
            {
                name : 'Tabla con entrada datos',
                type : 'checkbox',
                message : 'nav',
                value : '1'
            },
            {
                name : 'SignIn',
                type : 'checkbox',
                message : 'title',
                value : '2'
            },
            {
                name : 'SignUp',
                type : 'checkbox',
                message : 'void',
                value : '3'
            },
        ]
    }
  ])
  .then(answers => {
    console.log(answers.list+'--')
     switch(answers.list){
      case '1':
        if(select == '1'){
          child = exec('pwd',
          function (error, stdout, stderr) {
            var cadena = stdout
            var separador = "\n"
            var arregloDeSubCadenas = cadena.split(separador);
            console.log(arregloDeSubCadenas);
            var com = arregloDeSubCadenas[0]+'/'+name+'.html'
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/tables/nav/tabla.html '+com)
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/tables/nav/styleTN.css '+arregloDeSubCadenas[0])
            // controlamos el error
            if (error !== null) {
              console.log('exec error: ' + error);
            }
          });
        }else{
          child = exec('pwd',
          function (error, stdout, stderr) {
            var cadena = stdout
            var separador = "\n"
            var arregloDeSubCadenas = cadena.split(separador);
            console.log(arregloDeSubCadenas);
            var com = arregloDeSubCadenas[0]+'/'+name+'.html'
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/tables/titulo/tabla.html '+com)
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/tables/nav/styleTT.css '+arregloDeSubCadenas[0])
            // controlamos el error
            if (error !== null) {
              console.log('exec error: ' + error);
            }
          });
        }
        break;
      case '2':
        if(select == '1'){
          child = exec('pwd',
          function (error, stdout, stderr) {
            var cadena = stdout
            var separador = "\n"
            var arregloDeSubCadenas = cadena.split(separador);
            console.log(arregloDeSubCadenas);
            var com = arregloDeSubCadenas[0]+'/'+name+'.html'
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/signIN/nav/signIn.html '+com)
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/signIN/nav/styleSN.css '+arregloDeSubCadenas[0])
            // controlamos el error
            if (error !== null) {
              console.log('exec error: ' + error);
            }
          });
        }else{
          child = exec('pwd',
          function (error, stdout, stderr) {
            var cadena = stdout
            var separador = "\n"
            var arregloDeSubCadenas = cadena.split(separador);
            console.log(arregloDeSubCadenas);
            var com = arregloDeSubCadenas[0]+'/'+name+'.html'
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/signIN/titulo/signIn.html '+com)
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/signIN/titulo/styleST.css '+arregloDeSubCadenas[0])
            // controlamos el error
            if (error !== null) {
              console.log('exec error: ' + error);
            }
          });
        }
        break;
      case 3:
        if(select == '1'){
          child = exec('pwd',
          function (error, stdout, stderr) {
            var cadena = stdout
            var separador = "\n"
            var arregloDeSubCadenas = cadena.split(separador);
            console.log(arregloDeSubCadenas);
            var com = arregloDeSubCadenas[0]+'/'+name+'.html'
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/signUP/nav/signUp.html '+com)
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/signUP/nav/styleLN.css '+arregloDeSubCadenas[0])
            // controlamos el error
            if (error !== null) {
              console.log('exec error: ' + error);
            }
          });
        }else{
          child = exec('pwd',
          function (error, stdout, stderr) {
            var cadena = stdout
            var separador = "\n"
            var arregloDeSubCadenas = cadena.split(separador);
            console.log(arregloDeSubCadenas);
            var com = arregloDeSubCadenas[0]+'/'+name+'.html'
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/signUP/titulo/signUn.html '+com)
            exec('cp '+ '/home/isaac/Imágenes/Kuroneeko/templates/signUP/titulo/styleLT.css '+arregloDeSubCadenas[0])
            // controlamos el error
            if (error !== null) {
              console.log('exec error: ' + error);
            }
          });
        }
        break;

     }
  });
}