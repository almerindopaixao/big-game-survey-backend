"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const GameRouter_1 = __importDefault(require("./routes/GameRouter"));
const RecordRouter_1 = __importDefault(require("./routes/RecordRouter"));
dotenv_1.default.config();
class App {
    constructor() {
        this.app = express_1.default();
        this.middlewares();
        this.connection();
        this.router();
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
    }
    router() {
        this.app.use('/games', GameRouter_1.default);
        this.app.use('/records', RecordRouter_1.default);
    }
    connection() {
        const connection = process.env.CONNECTIONSTRING;
        mongoose_1.default
            .connect(connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
            .then(() => {
            this.app.emit('ok');
        })
            .catch((e) => console.log(e));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map