require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4321; // chooses what is in the env OR 4321 if not available

app.get('/dburl', (request, response) => {
    response.send(`My connection string is: ${process.env.DATABASE_URL}`)
});

app.get('/', (request, response) => {
    response.send(`hello world i am listening to port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`)
});