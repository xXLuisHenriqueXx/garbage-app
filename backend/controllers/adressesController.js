const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function getAddresses() {
    const filePath = path.join(__dirname, '..', 'data', 'adresses.txt');

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        console.error('File does not exist');
        return;
    }

    try {
        const data = await readFile(filePath, 'utf8');
        const addresses = data.split('\n').map(address => {
            const [addressString, addressLink] = address.split(',');
            return { addressString, addressLink };
        });

        console.log(addresses);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

module.exports = {
    getAddresses
}
