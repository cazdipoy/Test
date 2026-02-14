const express = require('express');
const app = express();
const port = 3000; 

app.get('/about', (req, res) => {
    res.send("Tajaabo Express server Woo shaqeeyay.");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); });
