let RNRandomBytes = require('react-native').NativeModules.RNRandomBytes;
let _isInitialized = false, _randomBytesStrings = [], _length;

function addRandomBytesString(){
    RNRandomBytes.randomBytes(_length).then((randomBytesString)=>{
        console.log('pushing another random string');
        _randomBytesStrings.push(randomBytesString);
    })
}

export async function init(length) {
    console.log('initializing RNRandomBytes');
    _length = length;
    for (let i = 0; i < 10; i++) {
        let randomBytesString = await RNRandomBytes.randomBytes(length)
        _randomBytesStrings.push(randomBytesString);
    }
    console.log(`RNRandomBytes is initialized with ${_randomBytesStrings.length} strings`);
}

export function randomBytes(arr) {
    console.log(`randomBytes called. Module has ${_randomBytesStrings.length} ready`);
    let nextRandomByteString = _randomBytesStrings.pop();
    addRandomBytesString();
    arr = nextRandomByteString.split('');
    console.log('randomBytes arr is: '+arr);
}