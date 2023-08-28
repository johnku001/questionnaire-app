.PHONY: all both app api api_build app_build

all:
	@$(MAKE) both -j2

both: api app

api:
	@echo "Running api..."
	cd api && npm start && timeout 3

app:
	@echo "Running app..."
	cd app && yarn start

build: both_build

both_build: api_build app_build

api_build:
	@echo "Building api..."
	cd api && npm install --check-files && npm run build

app_build:
	@echo "Building app..."
	cd app && yarn install --check-files
