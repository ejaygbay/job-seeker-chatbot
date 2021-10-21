const express = require('express');
const PORT = 3300;
const app = express();

app.get('/', (req, res) => {
    res.send("Messenger Chatbot");
})

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));