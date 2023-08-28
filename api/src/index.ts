import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

import questionnaireData from './data.json';
const app = express();
const port = 3001;

// Middleware to parse JSON data
app.use(express.json());

app.use(cors());

// Configure CORS middleware with custom options
app.use(
  cors({
    origin: 'http://localhost:3000', // Specify allowed origin
    methods: ['GET', 'POST'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  })
);

// Route to get all questions
app.get('/questions', (_: Request, res: Response) => {
  res.json(questionnaireData);
});

// Route to get a specific question by ID
app.get('/questions/:id', (req: Request, res: Response) => {
  const page = req.params.id;
  const pageData = questionnaireData.pages[1];
  const question = (pageData.elements as Array<any>).find(
    (q: any) => q.name === page
  );
  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ message: 'Question not found' });
  }
});

app.post('/questions', (req, res) => {
  const data = req.body;

  // Save the received data to result.json
  const filePath = path.join(__dirname, 'result.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.json({ message: 'Data saved successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
