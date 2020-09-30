"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.APP_PORT || 8080;
app_1.default.on('ok', () => {
    app_1.default.listen(port, () => {
        console.log(`Acessar http://localhost:${port}`);
        console.log(`Servidor executando na porta ${port}`);
    });
});
//# sourceMappingURL=server.js.map