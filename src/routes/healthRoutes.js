
const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {
    res.status(200).json({
        sucesso: true,
        mensagem: "API do BarberAPP funcionando corretamente!"
    });
});

module.exports = router;
