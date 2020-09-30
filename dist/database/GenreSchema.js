"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const GenreSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
});
mongoose_auto_increment_1.default.initialize(mongoose_1.default.connection);
GenreSchema.plugin(mongoose_auto_increment_1.default.plugin, 'Genre');
const GenreModel = mongoose_1.default.model('Genre', GenreSchema);
exports.default = GenreModel;
//# sourceMappingURL=GenreSchema.js.map