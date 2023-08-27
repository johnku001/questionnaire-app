"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var data_json_1 = __importDefault(require("./data.json"));
var app = (0, express_1.default)();
var port = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.get('/questions', function (_, res) {
    res.json(data_json_1.default);
});
app.get('/questions/:id', function (req, res) {
    var page = parseInt(req.params.id, 10);
    var question = data_json_1.default.pages.find(function (q) { return q.page.name === page; });
    if (question) {
        res.json(question);
    }
    else {
        res.status(404).json({ message: 'Question not found' });
    }
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
//# sourceMappingURL=index.js.map