"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3001;
var questionnaireData = {
    data: [
        {
            id: 1,
            question: 'What is your favorite color?',
            options: ['Red', 'Green', 'Blue'],
        },
        {
            id: 2,
            question: 'Which programming language do you prefer?',
            options: ['JavaScript', 'Python', 'Java', 'C++'],
        },
    ],
};
app.use(express_1.default.json());
app.get('/questions', function (_, res) {
    res.json(questionnaireData);
});
app.get('/questions/:id', function (req, res) {
    var questionId = parseInt(req.params.id, 10);
    var question = questionnaireData.data.find(function (q) { return q.id === questionId; });
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