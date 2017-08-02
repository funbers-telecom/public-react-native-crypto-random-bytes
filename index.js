let RNRandomBytes = require('react-native').NativeModules.RNRandomBytes;

export function randomBytes(length, cb) {

    RNRandomBytes.randomBytes(length, function(err, base64String) {
        if (err) {
            cb(err)
        } else {
            cb(null, toBuffer(base64String))
        }
    })
}