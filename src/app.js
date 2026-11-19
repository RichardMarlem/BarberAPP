
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");

const healthRoutes = require("./routes/healthRoutes");

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Disponibiliza o HTML durante o desenvolvimento local
if (process.env.NODE_ENV !== "production") {
    app.use(express.static(path.join(__dirname, "../public")));
}

// Página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Rotas da API
app.use("/api", healthRoutes);

module.exports = app;
