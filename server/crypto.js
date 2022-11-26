// const crypto = require('crypto')

// const secret = 'kriptografi'

// const encrypt = (namaSiswa) => {
//     const iv = Buffer.from(crypto.randomBytes(16))
//     const cipher = crypto.createCipheriv('aes-256-ctr', Buffer.from(secret), iv)

//     const encryptedName = Buffer.concat([
//         cipher.update(namaSiswa),
//         cipher.final()
//     ])

//     return {
//         iv: iv.toString('hex'),
//         namaSiswa: encryptedName.toString('hex')
//     }
// }

// const decrypt = (encryption) => {
//     const decipher = crypto.createDecipheriv('aes-256-ctr', Buffer.from(secret), Buffer.from(encryption.iv, 'hex'))

//     const decryptedName = Buffer.concat([
//         decipher.update(Buffer.from(encryption.namaSiswa, 'hex')),
//         decipher.final()
//     ])

//     return decryptedName.toString
// }

// module.exports = { encrypt, decrypt }