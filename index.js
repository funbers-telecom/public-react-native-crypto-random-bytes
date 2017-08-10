let RNRandomBytes = require('react-native').NativeModules.RNRandomBytes;
let base64 = require('base-64');
let _isInitialized = false, _randomBytesStrings = [], _length;

if (!global.btoa) {
    global.btoa = base64.encode;
}

if (!global.atob) {
    global.atob = base64.decode;
}

function addRandomBytesString(){
    RNRandomBytes.randomBytes(_length).then((randomBytesString)=>{
        console.log('pushing another random string');
        _randomBytesStrings.push(global.atob(randomBytesString));
    })
}

export async function init(length) {
    console.log('initializing RNRandomBytes');
    _length = length;
    for (let i = 0; i < 10; i++) {
        let randomBytesString = await RNRandomBytes.randomBytes(length);
        try {
            console.log('pushing random string '+randomBytesString);
            _randomBytesStrings.push(global.atob(randomBytesString));
        }
        catch (ex) {
            console.error('exc from atob '+randomBytesString, ex);
            console.log('exc from atob stack: '+ex.stack);
        }

    }
    console.log(`RNRandomBytes is initialized with ${_randomBytesStrings.length} strings`);
}

export function randomBytes(arr) {
    console.log(`randomBytes called. Module has ${_randomBytesStrings.length} ready`);
    let nextRandomByteString = _randomBytesStrings.pop();
    addRandomBytesString();
    for (let i = 0; i < arr.length; i++) {
        arr[i] = nextRandomByteString.charCodeAt(i);
    }
    console.log('randomBytes arr is: '+arr);
}

export function getRandomValues(arr) {
    randomBytes(arr);
}