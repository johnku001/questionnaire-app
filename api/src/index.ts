// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

// Temporary data to simulate questions and answer options
const questionnaireData = {
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

// Middleware to parse JSON data
app.use(express.json());

// Route to get all questions
app.get('/questions', (_: Request, res: Response) => {
  res.json(questionnaireData);
});

// Route to get a specific question by ID
app.get('/questions/:id', (req: Request, res: Response) => {
  const questionId = parseInt(req.params.id, 10);
  const question = questionnaireData.data.find((q) => q.id === questionId);
  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ message: 'Question not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
