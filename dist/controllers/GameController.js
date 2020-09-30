"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameModel_1 = __importDefault(require("../models/GameModel"));
var Platform;
(function (Platform) {
    Platform[Platform["PC"] = 0] = "PC";
    Platform[Platform["PLAYSTATION"] = 1] = "PLAYSTATION";
    Platform[Platform["XBOX"] = 2] = "XBOX";
})(Platform || (Platform = {}));
class GameController {
    async index(req, res) {
        try {
            const games = await GameModel_1.default.searchGames();
            if (!games)
                throw new Error('Banco de dados vazio');
            const gamesRefactory = games.map((value) => {
                return {
                    id: value._id,
                    title: value.title,
                    platform: Platform[value.platform],
                };
            });
            return res.json(gamesRefactory);
        }
        catch (e) {
            return res.status(404).send(e);
        }
    }
}
exports.default = new GameController();
//# sourceMappingURL=GameController.js.map