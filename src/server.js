const app = require("./app");

const PORT = process.env.PORT || 3000;

console.log("Iniciando servidor...");

const servidor = app.listen(PORT, () => {
    console.log(`Servidor disponível em http://localhost:${PORT}`);
});

servidor.on("error", (erro) => {
    console.error("Erro ao iniciar servidor:", erro);
});