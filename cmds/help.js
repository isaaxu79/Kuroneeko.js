const chalk =require('chalk');
const clear = require('clear');
const figlet = require('figlet')
const inquirer = require('inquirer')
const shell = require('shelljs')

clear();

console.log(
    chalk.green(
        figlet.textSync('Kuroneeko')    
    )
)

const menus = {
  main: `
    kuroneeko [command] <options>

    create ............. Abre la herramienta para generar los templates
    version ............ Muestra la version de la herramienta
    help ............... Muestra la ayuda para escribir los comandos`,

  create: `
    kuroneeko create <name>`,

}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
