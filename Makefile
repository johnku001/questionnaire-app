.PHONY: all both app api

all: 
	@$(MAKE) both -j2

both: api app

api:
	@echo "Building and running API..."
		cd api && npm install --check-files  &&  npm run build && npm start 
		timeout 3

app:
	@echo "Building and running app..."
		cd app && yarn install --check-files && yarn start
	



