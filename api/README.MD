# Questionnaire API

This is a simple Express.js API for managing questionnaire data. The API provides endpoints to retrieve questionnaire questions and save responses to a JSON file.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/johnku001/questionnaire-test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

   The API server will be running at `http://localhost:3001`.

2. Use API endpoints to interact with the questionnaire data.

## API Endpoints

- **GET /questions**

  Get all questions from the questionnaire.

- **GET /questions/:id**

  Get a specific question by ID.

- **POST /questions**

  Create a new questionnaire response.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README according to your project's specifics. It covers the basic information about your Express.js API, how to get started, available API endpoints, contributing guidelines, and the license information.