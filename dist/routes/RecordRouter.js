"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RecordController_1 = __importDefault(require("../controllers/RecordController"));
const router = express_1.Router();
router.get('/', RecordController_1.default.index);
router.post('/', RecordController_1.default.store);
exports.default = router;
//# sourceMappingURL=RecordRouter.js.map