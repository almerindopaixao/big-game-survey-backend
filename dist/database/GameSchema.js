"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const GameSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    platform: { type: Number, required: true },
    genre_id: { type: Number, required: true },
});
mongoose_auto_increment_1.default.initialize(mongoose_1.default.connection);
GameSchema.plugin(mongoose_auto_increment_1.default.plugin, 'Game');
const GameModel = mongoose_1.default.model('Game', GameSchema);
exports.default = GameModel;
//# sourceMappingURL=GameSchema.js.map