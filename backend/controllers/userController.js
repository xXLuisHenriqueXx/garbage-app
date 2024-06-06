const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function login(req, res) {
    if (!req.body || !req.body.email || !req.body.password) {
        return res.status(400).send({ message: "request malformated" });
    }

    const { email, password } = req.body;

    try {
        const filePath = path.join(__dirname, '..', 'data', 'users.txt');
        const data = await readFile(filePath, 'utf8');
        const users = data.split('\n').map(line => line.trim().split(':'));

        const user = users.find(([id, userEmail, userPassword]) => userEmail === email && userPassword === password);

        if (user) {
            const [id, userEmail, userPassword, userName, registrationDate, balance, plan, transactions] = user;

            const transactionHistory = transactions.split(';').map(transaction => {
                const [adress, value, quantity, date] = transaction.split('|');
                return { adress, value: parseFloat(value), quantity: parseInt(quantity), date };
            });

            const userData = {
                id: parseInt(id),
                email: userEmail,
                name: userName,
                registrationDate,
                balance: parseFloat(balance),
                plan,
                transactionHistory
            };

            return res.status(200).send({ message: "login successful", user: userData });
        } else {
            return res.status(401).send({ message: "invalid email or password" });
        }
    } catch (error) {
        console.error('Error reading user file:', error);
        return res.status(500).send({ message: "internal server error" });
    }
}



module.exports = {
    login
}