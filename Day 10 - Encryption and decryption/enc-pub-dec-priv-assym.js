/*
    Example of assymetric encryption
    Encrypting using public key and decrypting using private key
 */

// You need to have generated auto-generated keys for this

/*
    If you already have a private/public key.You can always choose to use the existing keys as those keys might be already paired with some server
    Follow these steps in terminal if not
    1. ssh-keygen
    2. ls ~/.ssh/
    You should be able to see two files
    id_rsa and id_rsa.pub
    id_rsa is private key and id_rsa.pub  is public key
 */

const crypto = require('crypto');
const fs = require('fs');

// Reading the public key
let publicKeyAddress = '/home/tejas/.ssh/id_rsa.pub';
let privateKeyAddress = '/home/tejas/.ssh/id_rsa';

const publickey = fs.readFileSync(publicKeyAddress).toString();

// Passing the text to be encrypted using private key
const buf = Buffer.from('This is secret code', 'utf8');

//Encrypting the text
secretData = crypto.publicEncrypt(publickey, buf);

// Printing the encrypted text
console.log(secretData.toString('utf8'));

// reading the private file
const privateKey = {
    key: fs.readFileSync(privateKeyAddress).toString()
};

// Decrypting the text using public key
origData = crypto.privateDecrypt(privateKey, secretData);
// Printing the original content
console.log(origData.toString());