const express = require('express');
const router = express.Router();
const catchError = require('../utils/catchError')
const sendEmail = require('../utils/sendEmail')

// colocar las rutas aquí
router.post("/emails", catchError(async (req, res) => {
    await sendEmail({
        to: "joel@gmail.com",
        subject: "proyectod",
        html: `
            <h1>Hola mundo</h1>
            <p>lorem ipsum dolor</p> 
        `
    });
    return res.json({ message: "enviando email" });
}));

module.exports = router;