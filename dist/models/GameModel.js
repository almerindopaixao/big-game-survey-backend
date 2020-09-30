"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameSchema_1 = __importDefault(require("../database/GameSchema"));
var Platform;
(function (Platform) {
    Platform[Platform["PC"] = 0] = "PC";
    Platform[Platform["PLAYSTATION"] = 1] = "PLAYSTATION";
    Platform[Platform["XBOX"] = 2] = "XBOX";
})(Platform || (Platform = {}));
class GameModel {
    async searchGames() {
        const gamesPromise = (await GameSchema_1.default.find());
        if (!gamesPromise)
            return;
        return gamesPromise;
    }
    async searchById(id) {
        const game = (await GameSchema_1.default.findById(id));
        return {
            title: game.title,
            platform: Platform[game.platform],
            genre_id: game.genre_id,
        };
    }
}
exports.default = new GameModel();
//# sourceMappingURL=GameModel.js.map