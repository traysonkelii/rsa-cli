const rsa = require('node-rsa');

/**
 * Returns an object with two attributes public and private with
 * their corresponding keys
 * {
 *  public: <public key>
 *  private: <private key>
 * }
 */
const generateKeys = () => {
    const key = new rsa().generateKeyPair();

    const keyObject =  {
        publicKey: key.exportKey("public"),
        privateKey: key.exportKey("private")
    }

    return keyObject;
}

module.exports = generateKeys;
