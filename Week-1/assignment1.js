// Intro to Proof of work

// Question: What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

// A: You will have to brute force until you find a value that starts with 00000

const crypto = require('crypto')

// Function to find an input string that produces a hash starting with '00000'


function findhashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr = input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash}
    }
    input++;
  }
}

// Find and print the input string and hash
const result = findhashWithPrefix('00000');
console.log(`input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

// input: 596138
// Hash:00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab
 
// if the number od zeros are started with '000000000' then that is difficult problem and that is what bit-coining mining.

