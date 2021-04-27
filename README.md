# RSA Key Creation 

Simple CLI tool used to create RSA encrypted private and public keys. The private key is dually protected by Shamir's secret sharing algorithm. The app is purely created in JavaScript. 

# Build the app

The following technology is required to use the CLI:
- `npm 7.10.0`
- `node v16.0.0`

Follow the link [here](https://nodejs.org/en/download/) to download these dependencies.

Once the following dependencies are installed simply clone the repository and run the following command at the root directory:

```
npm install
```

# Run the app

In order to make the tool available you must install the command globally by running the following command: 

```
npm i -g
```
The following command is used to create one public key file labelled `Public.TXT` and `n` sharded private key files of this format `Shard[n].TXT` where `[n]` is replaced by a number. 

```
createKeys -n <shard number>
```

Note to uninstall the CLI use the following command: 

```
npm uninstall -g rsa-cli
```

# Running the unit tests

The tool uses the `Jest` testing framework and any file with the following extension `*.test.js` is picked up by the test runner. To run the testing suite you simply need to run the following command:

```
npm run test
```