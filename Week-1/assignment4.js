// Find a number such that its hash is start with harkirat 

const crypto = require('crypto');

function findhashWithPrefix(prefix) {
  let nonce = 0;

  while(true) {
    const hash = crypto.createHash('sha256').update(String(nonce)).digest('base64'); // base64 allows letters like h, r, k, i, t

    if (hash.startsWith(prefix)) {
      return { nonce, hash };
    }
    nonce++;
  }
}

/*
// Example
const result = findhashWithPrefix('har');
console.log("Nonce:", result.nonce); // 25491
console.log("Hash:", result.hash);  //  har1DWm05wCSVECkcAXXSfx/9xp8YIkf0xSyvkO+WCw=

*/

// This may take VERY long for "harkirat"

const result = findhashWithPrefix('harkirat');
console.log("Nonce:", result.nonce);
console.log("Hash:", result.hash);

// Finding "harkirat" (8 characters) in base64 means: 64^8 ≈ 281 trillion possibilities
