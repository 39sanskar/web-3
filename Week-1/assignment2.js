// What if I ask you that the input string should start with 100xdevs ? How would the code change?

const crypto = require('crypto')

function findhashWithPrefix(prefix) {
  const baseString = "100xdevs";
  let nonce = 0; 
  while(true) {
    let inputStr = baseString + nonce;
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if (hash.startsWith(prefix)) {
      return { base: baseString, nonce: nonce, hash: hash }
    }
    nonce++;
  }
}

// Find and print the input string and hash
const result = findhashWithPrefix('00000');
console.log(`Base String: ${result.base}`);
console.log(`Nonce: ${result.nonce}`);
console.log(`Full Input: ${result.base + result.nonce}`);
console.log(`Hash: ${result.hash}`);

// Base String: 100xdevs
// Nonce: 2274885
// Full Input: 100xdevs2274885
// Hash: 00000b2d1dde70b56f41571855e268d140b304c7661c0ef04a8889bd83a88b06

