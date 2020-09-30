"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecordSchema_1 = __importDefault(require("../database/RecordSchema"));
const GameSchema_1 = __importDefault(require("../database/GameSchema"));
class RecordModel {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.record = null;
    }
    static async countOfRecords(min, max) {
        let numberOfRecords;
        if (min === '' || max === '') {
            numberOfRecords = await RecordSchema_1.default.find().countDocuments();
        }
        else {
            numberOfRecords = await RecordSchema_1.default.find({
                moment: { $gte: min, $lte: max },
            }).countDocuments();
        }
        if (!numberOfRecords)
            return 0;
        return numberOfRecords;
    }
    async createRecord() {
        const numberOfGames = (await GameSchema_1.default.find().countDocuments()) - 1;
        if (this.body.game_id < 0 || this.body.game_id > numberOfGames) {
            this.errors.push(`O Id do game informado é inválido: ${this.body.game_id}`);
        }
        if (this.errors.length > 0)
            return;
        this.record = (await RecordSchema_1.default.create(this.body));
    }
    static async searchRecords({ min, max, page, direction, orderBy, linesPerPage, }) {
        let records;
        if (min === '' || max === '') {
            records = (await RecordSchema_1.default.find()
                .limit(linesPerPage)
                .skip(linesPerPage * page)
                .sort({ [orderBy]: direction }));
        }
        else {
            records = (await RecordSchema_1.default.find({
                moment: { $gte: min, $lte: max },
            })
                .limit(linesPerPage)
                .skip(linesPerPage * page)
                .sort({ [orderBy]: direction }));
        }
        if (!records)
            return;
        return records;
    }
}
exports.default = RecordModel;
//# sourceMappingURL=RecordModel.js.map