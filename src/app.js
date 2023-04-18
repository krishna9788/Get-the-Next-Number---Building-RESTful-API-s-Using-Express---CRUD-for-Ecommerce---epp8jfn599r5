const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num', (req, res) => {
    if (req.body.num && typeof req.body.num == "number") {
        res.status(200).json({ "message": req.body.num + 1, "status": "success" })
    }
    else {
        res.status(404).json({ "message": "error message", "status": "failure" })
    }
})

module.exports = app;
