// What if I ask you to find a nonce for the following input - sanskar => Raman | Rs 100 Ram => Ankit | Rs 10

const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
  const transactions = `
sanskar => Raman | Rs 100
Ram => Ankit | Rs 10
`;

  let nonce = 0;

  while (true) {
    const dataToHash = transactions + nonce; // combine only for hashing

    const hash = crypto
      .createHash('sha256')
      .update(dataToHash)
      .digest('hex');

    if (hash.startsWith(prefix)) {
      return {
        transactions,
        nonce,
        hash
      };
    }
    nonce++;
  }
}
// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log("Transactions:\n", result.transactions);
console.log("Nonce:", result.nonce);
console.log("Full Input Used:", result.transactions + result.nonce);
console.log("Hash:", result.hash);

/*

Transactions:
 
sanskar => Raman | Rs 100
Ram => Ankit | Rs 10

Nonce: 1971828
Full Input Used: 
sanskar => Raman | Rs 100
Ram => Ankit | Rs 10
1971828
Hash: 000002fa238f351c2090a8c205acdfdffccf3f65fd7b45e36b41894663e129cf

*/