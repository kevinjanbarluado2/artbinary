const chalk = require('chalk');
const log = console.log;
process.title = "HelloWorld.eth";

let createArt = () => {
    //let Randomize = () => Math.floor(Math.random() * 500) + 500;
    setInterval(() => {
        addRandom="";
        for ($x = 0; $x < 100; $x++) {
            addRandom+= Math.floor(Math.random() * 2);
        }

        paint = `${addRandom}`
        log(chalk.green(paint))

    }, 100)

}
createArt()
