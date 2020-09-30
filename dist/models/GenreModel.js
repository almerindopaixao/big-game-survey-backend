"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GenreSchema_1 = __importDefault(require("../database/GenreSchema"));
class GenreModel {
    static async findGenreById(id) {
        const genre = (await GenreSchema_1.default.findById(id));
        return {
            name: genre.name,
        };
    }
}
exports.default = GenreModel;
//# sourceMappingURL=GenreModel.js.map