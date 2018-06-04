/*Data that can be read and understood easily is known as Plain text. The problem with plain text is that everyone can read it. But sometimes we don't want everyone to have the access to read the data i.e. the confidentiality of the data needs to be maintained.

Encryption : Encryption deals with providing confidentiality to the data so that only authorize personnel have access to the data.
 In encryption , Plain text is transfromed to an unintelligible text with the help of key and algorithm which we can read but can
 not understand due to which the confidentiality of the data is protected. This unintelligible text is known as Cipher text .

Decryption : Decryption is the process of rendering the data , so that it can be changed into a human or machine readable and understandable form.
It takes the cipher text as input and converts it into the plain text with the help of key and algorithm.

Types of Encryption
There are 2 ways to encrypt and decrypt the content which are explained in detail below :

Symmetric or private key encryption :
In symmetric , same key is used to perform encryption and decryption. It is fast as compared to asymmetric.
Scenario :
Mr.A wants to send a confidential message to Mr.X
Mr.H in sitting in between monitoring all the messages transmit by Mr.A
So, Mr.A encrypted the message with his private key and transmits the message. Now further there are 2 possibilities :
The message is safely received by Mr. X who decrypted it using the same key with which the message was encrypted by Mr.A
Mr. H got the message but as Mr.H does not have the key with which the message is encrypted, so he can not decrypt it and hence the confidentiality of the message is retained.
Asymmetric or public key encryption:
In asymmetric , we use a pair of keys to perform encryption and decryption. In simple words, key which is used to encrypt is different from the key which is used to decrypt. The key pair can be generated using openSSL or any other key pair generator. The key pair consist of a public key and a private key. Public key is known to all however the private key is only known to the person whom it belongs.For the problems Asymmetric encryption solves consider the following scenarios:

Scenario 1
Rj wants to send a confidential message to Mr.X
Mr.H in sitting in between monitoring all the messages transmit by Rj
So, Rj encrypted the message with his private key and transmits the message. Now further there are 2 possibilities :
The message is safely received by Mr. X who decrypted it using Rj's public key.
Mr. H got the message and decrypted it using Rj's Public key. But now Mr.H can not encrypt it again because Mr.H is not having Rj's Private key and when the message reaches its actual destination that is to Mr.X , Mr.X will get to know that the confidentiality of the message is breached and hence the information provided by the message can not be trusted.
Hence either the message is received by actual receiver with it's confidentiality retained or we get to know that the confidentiality is breached.

Scenario 2
Now Mr. X wants to inform Rj that the confidentiality of the message is breached but he does not want Mr.H to know about it.
So Mr. X encrypted the message using the public key of Rj,which can now only be decrypted using the private key of Rj.
If Mr.H somehow even got the reply send by Mr.X to Rj , then also he can't decrypt it because the private key is only with Rj.
*/


/*
1. Symmetric encryption and decryption
Encryption using createCipher and decryption using createDecipher inbuilt methods : Same key is used for both encryption and decryption.
 */


const crypto = require('crypto'), algorithm = 'aes-256-ctr', password  = 'Tejas';
// Here 'aes-256-ctr' is the advance encryption standard we are using for encryption
// Text is the confidential data which we need to encrypt using 'password'(key)

function encrypt(text) {
    let  cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}



// Here "aes-256-ctr" is the advance encryption standard we used for encryption
// Text is the Cipher which we need  to decrypt using password(key)

function decrypt(text) {
    let decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// Actual text encrypted
let textToEncrypt = 'Tejas Talekar,+ Software Developer Follow Me @github.com/tjstlekr , @tjstlekr';
// Calling the encrypt function
const e = encrypt(textToEncrypt);
console.log(e);


const d = decrypt(e);
console.log(d);

