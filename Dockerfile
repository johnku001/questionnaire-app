# Use the official Node.js 18 image as the base image
FROM node:18

# Install vim for debugging
RUN apt-get update && apt-get install -y vim

# Set the working directory
WORKDIR /src

# Copy the api and app directories into the /src directory of the container
COPY api /src/api
COPY app /src/app
COPY Makefile /src

# run make api and app
RUN make api_build
RUN make app_build

# Set the entry point to run a shell (Bash) with the make command as an argument
ENTRYPOINT ["/bin/bash", "-c", "make"]
