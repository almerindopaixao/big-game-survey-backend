"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const RecordSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    moment: { type: Date, default: Date.now },
    game_id: { type: Number, required: true },
});
mongoose_auto_increment_1.default.initialize(mongoose_1.default.connection);
RecordSchema.plugin(mongoose_auto_increment_1.default.plugin, 'Record');
const GenreModel = mongoose_1.default.model('Record', RecordSchema);
exports.default = GenreModel;
//# sourceMappingURL=RecordSchema.js.map