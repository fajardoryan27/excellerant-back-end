var ini = require('ini')
var fs = require('fs')
var configIni = ini.parse(fs.readFileSync('./Config.ini', 'utf-8'))
const crypto = require("crypto")
// const decrypt = require('./decrypt')
const decrypt = (encryptedText, password) => {
  try {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedData = Buffer.from(textParts.join(':'), 'hex');
    const key = crypto.createHash('sha256').update(password).digest('base64').substr(0, 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    const decrypted = decipher.update(encryptedData);
    const decryptedText = Buffer.concat([decrypted, decipher.final()]);
    return decryptedText.toString();
  } catch (error) {
    console.log(error)
  }
}
const decText = decrypt(configIni['dbPass'], pass)
var config = {
  "user": configIni['dbUser'], // Database username
  "password": decText, // Database password
  "server": configIni['host'], // Server IP address
  "database": configIni['dbName'], // Database name
  "options": {
      "encrypt": false // Disable encryption
  }
}
module.exports=config;



