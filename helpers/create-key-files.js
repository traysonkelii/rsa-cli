const generateKeys = require('../helpers/generate-keypair');
const PUBLIC_KEY_PATH = 'Public.TXT';
const THRESHOLD_MIN = 2;
const sss = require('shamirs-secret-sharing');
const fs = require('fs');
const chalk = require("chalk");

const createKeyFiles = (shardCount) => {
    const { publicKey, privateKey } = generateKeys();

    fs.writeFileSync(PUBLIC_KEY_PATH, publicKey, 'utf8');

    const shards = sss.split(privateKey, { shares: shardCount, threshold: THRESHOLD_MIN })

    shards.forEach((shard, index) => {
        fs.writeFileSync(`Shard${index + 1}.TXT`, shard, 'utf8');
    });

    console.log(chalk.green.bold(`Keys successfully created and sharded into ${shardCount} files`));
}

module.exports = createKeyFiles;