# Questionnaire App and API
 
Welcome to the Questionnaire App and API repository! This repository contains two subprojects: the Questionnaire App and the Questionnaire API.
 
## Getting Started by Docker

### Prerequisites

- [Docker](https://www.docker.com/get-started) must be installed on your system.

### Build the Docker Image

To build the Docker image for the Questionnaire App, follow these steps:

1. Open a terminal and navigate to the root directory of the project.
2. Run the following command to build the Docker image:

   ```sh
   docker build -t questionnaire-app .
   ```

   This command will build the Docker image with the name `questionnaire-app`.

### Run the Docker Container

Once the Docker image is built, you can run the Questionnaire App in a Docker container using the following command:

```sh
docker run -it -p 3000:3000 -p 3001:3001 questionnaire-app
```

This command will start a Docker container and expose ports `3000` and `3001` from the container to the corresponding ports on your local machine. The `-it` flag allows you to interact with the container's terminal.

### Access the App

Once the container is up and running, you can access the Questionnaire App in your web browser by visiting:

- Frontend: http://localhost:3000
- Backend (API): http://localhost:3001

### Stopping the App

To stop the Docker container, you can press `Ctrl+C` in the terminal where the container is running. 
## Getting Started in local
To build and run both the Questionnaire App and API concurrently, you can use the following command:
 
```bash
make build
make
```

To build and run both the Questionnaire App and API one by one, you can use the following command:
 
```bash
make build
make api
make app
``` 
 
## Components
 
### Questionnaire App
The Questionnaire App provides a user interface to interact with the questionnaire questions and answer options. If you want to know more about the Questionnaire App, please refer to the [Questionnaire App README](app/README.md).
 
### Questionnaire API
The Questionnaire API serves as the backend for managing the questionnaire data. If you want to learn more about the Questionnaire API, please refer to the [Questionnaire API README](api/README.md).
 
 
 
 
 

