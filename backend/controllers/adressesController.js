const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function getAddresses(req, res) {
    const filePath = path.join(__dirname, '..', 'data', 'adresses.txt');

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        console.error('File does not exist');
        return res.status(404).send({ error: 'File does not exist' });
    }

    try {
        const data = await readFile(filePath, 'utf8');
        const addresses = data.split('\n').map(address => {
            const [addressString, addressLink] = address.split(',');
            return { addressString, addressLink };
        });

        return res.status(200).send({ addresses });
    } catch (err) {
        console.error('Error reading file:', err);
        return res.status(500).send({ error: 'Error reading file' });
    }
}

module.exports = {
    getAddresses
};
