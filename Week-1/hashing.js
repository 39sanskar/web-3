// Node.js code for generating SHA-256

const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash); // 55711980d50fd24989409a7a7d4e15fcd206556eec1245c94a6e60910dc4e41d

// SHA-256 it suggest the final output is 256-bits 

/*

- The hex string 55711980d50fd24989409a7a7d4e15fcd206556eec1245c94a6e60910dc4e41d uses 256 bits.
- Character Count: The string consists of 64 characters.
- Hexadecimal Encoding: In hexadecimal, each character represents 4 bits (a "nibble").
- Total Bits: 64 characters × 4 bits/character = 256

*/


