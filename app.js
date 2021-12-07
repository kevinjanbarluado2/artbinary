const chalk = require('chalk');
const log = console.log;
process.title = "HelloWorld.eth";


let createArt = () => {

    setInterval(() => {
        addRandom = "";
        for ($x = 0; $x < 100; $x++) {
            addRandom += Math.floor(Math.random() * 2);
        }

        paint = `${addRandom}`

        let randomColor = Math.floor(Math.random() * 4) + 1;
        switch (randomColor) {
            case 1: log(chalk.green.bold(paint)); break;
            case 2: log(chalk.blue.bold(paint)); break;
            case 3: log(chalk.red.bold(paint)); break;
            case 4: log(chalk.white.bold(paint)); break;
            default:break;

        }


    }, 100)

}
createArt()
