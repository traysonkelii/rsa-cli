const createKeyFiles = require('../helpers/create-key-files');
const randomString = require('randomstring');
const rsa = require('node-rsa');
const fs = require('fs');
const sss = require('shamirs-secret-sharing');

test('createKeyFiles encrypts and decrypts as expected', () => {
    const message = randomString.generate();
    const shardCount = 5;

    createKeyFiles(shardCount);

    const shard2 = fs.readFileSync('Shard2.TXT');
    const shard5 = fs.readFileSync('Shard5.TXT');
    const publicRaw = fs.readFileSync('Public.TXT');
    const combinedShards = sss.combine([shard2, shard5]);

    const publicKey = new rsa();
    const privateKey = new rsa();

    publicKey.importKey(publicRaw);
    privateKey.importKey(combinedShards.toString());

    console.log(`Initial random string: ${message}\n`);

    const encryptedByPublic = publicKey.encrypt(message, "base64");
    console.log(`Random string endocded by public key: ${encryptedByPublic}`);

    const actual = privateKey.decrypt(encryptedByPublic, "utf8");
    console.log(`Random string decoded: ${actual}`);
    
    expect(actual).toBe(message);
})



// const readFiles = (testMessage) => {
//     console.log(testMessage);
//     const shard2 = fs.readFileSync('Shard2.TXT');
//     const shard5 = fs.readFileSync('Shard5.TXT');
//     const public = fs.readFileSync('Public.TXT');
//     const combinedShards = sss.combine([shard2, shard5]);

//     const publicKey = new rsa();
//     const privateKey = new rsa();

//     publicKey.importKey(public);
//     privateKey.importKey(combinedShards.toString());

//     const encryptedByPublic = publicKey.encrypt(testMessage, "base64");
//     const actual = privateKey.decrypt(encryptedByPublic, "utf8");

//     console.log(actual);
// }

// readFiles('Trayson is the best');