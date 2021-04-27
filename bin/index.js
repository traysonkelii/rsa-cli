#!/usr/bin/env node

const chalk = require("chalk");
const yargs = require("yargs");
const createKeyFiles = require('../helpers/create-key-files');

const createFromCli = () => {
    console.log(chalk.green(`Creation in progress\n`));
    const options = yargs
        .usage("Usage: createKeys -n <number of shards>")
        .option("n", { alias: "shards", describe: "Number of shards to create for private key", type: "number", demandOption: true })
        .argv;
    createKeyFiles(options.shards);
}

createFromCli();
