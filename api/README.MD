# Questionnaire API

This project implements a basic Questionnaire API using Express.js and TypeScript. The API provides endpoints to retrieve a list of questions and answer options, as well as to retrieve a specific question by its ID.

## Getting Started

Follow these steps to set up and run the Questionnaire API:

1. **Clone the Repository:**

   Clone this repository to your local machine using the following command:

   ```
   git clone <repository-url>
   ```

2. **Install Dependencies:**

   Navigate to the project directory and install the required dependencies using npm:

   ```
   cd <repository-directory>/src
   npm install
   ```

3. **Run the API:**

   Start the Questionnaire API server by running the following command:

   ```
   npm start
   ```

   The API will start and be accessible at `http://localhost:3001`.

## API Endpoints

The following endpoints are available:

- **GET /questions:** Retrieve a list of all questions and answer options.

- **GET /questions/:id:** Retrieve a specific question by its ID.

## Data

The API uses temporary data to simulate questions and answer options. This data is structured as an array of objects within the `questionnaireData` object in the `src/index.ts` file.

## Usage

You can use tools like `curl`, `Postman`, or a web browser to test the API endpoints. For example:

- To get all questions: `GET http://localhost:3001/questions`
- To get a specific question (replace `:id` with the desired question ID): `GET http://localhost:3001/questions/:id`

## Further Improvements

This project serves as a basic starting point for a Questionnaire API. To further enhance the API, you could consider:

- Storing data in a database instead of using temporary data.
- Adding endpoints to create, update, and delete questions.
- Implementing authentication and authorization for secure access.
- Adding validation and error handling for input data.

Feel free to explore, modify, and build upon this project to suit your needs.

---

Feel free to replace `<repository-url>` and `<repository-directory>` with the actual URL and directory name for your repository. This README provides an overview of the project, instructions for setting up and running the API, details about the available endpoints, and suggestions for further improvements.