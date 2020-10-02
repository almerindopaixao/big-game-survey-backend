"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecordModel_1 = __importDefault(require("../models/RecordModel"));
const GameModel_1 = __importDefault(require("../models/GameModel"));
const GenreModel_1 = __importDefault(require("../models/GenreModel"));
class RecordController {
    async index(req, res) {
        const min = req.query.min ? String(req.query.min) : '';
        const max = req.query.max ? String(req.query.max) : '';
        const page = req.query.page ? Number(req.query.page) : 0;
        const linesPerPage = req.query.linesPerPage
            ? Number(req.query.linesPerPage)
            : 0;
        const orderBy = req.query.orderBy ? String(req.query.orderBy) : 'moment';
        const direction = req.query.direction
            ? String(req.query.direction)
            : 'desc';
        const data = await RecordModel_1.default.searchRecords({
            min,
            max,
            page,
            linesPerPage,
            orderBy,
            direction,
        });
        if (!data)
            return res.status(400).json({
                errors: ['Nunhum dado encontrado'],
            });
        const dataRefactory = [];
        for (const record of data) {
            const { _id: id, name, age, game_id, moment } = record;
            const { title, platform, genre_id } = await GameModel_1.default.searchById(game_id);
            const { name: genreName } = await GenreModel_1.default.findGenreById(genre_id);
            dataRefactory.push({
                id,
                name,
                age,
                moment,
                gameTitle: title,
                gamePlatform: platform,
                genreName,
            });
        }
        const numberOfElements = await RecordModel_1.default.countOfRecords(min, max);
        let totalPages = Math.ceil(numberOfElements / linesPerPage);
        if (totalPages === Infinity)
            totalPages = 0;
        return res.json({
            content: dataRefactory,
            config: {
                pageNumber: page,
                pageSize: dataRefactory.length,
                totalPages,
                numberOfElements,
            },
        });
    }
    async store(req, res) {
        try {
            const recordModel = new RecordModel_1.default(req.body);
            await recordModel.createRecord();
            if (recordModel.errors.length > 0) {
                res.status(400).json({
                    errors: recordModel.errors,
                });
                return;
            }
            if (recordModel.record) {
                const { _id: id, name, age, game_id, moment } = recordModel.record;
                const { title, platform, genre_id } = await GameModel_1.default.searchById(game_id);
                const { name: genreName } = await GenreModel_1.default.findGenreById(genre_id);
                return res.json({
                    id,
                    name,
                    age,
                    moment,
                    gameTitle: title,
                    gamePlatform: platform,
                    genreName,
                });
            }
        }
        catch (e) {
            console.log(e);
            return res.status(404).send('Aconteceu um erro desconhecido');
        }
    }
}
exports.default = new RecordController();
//# sourceMappingURL=RecordController.js.map