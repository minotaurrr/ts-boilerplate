run:
	docker-compose build app
	docker-compose run app

build:
	docker-compose build builder

test:
	docker-compose build unit-test
	docker-compose run unit-test

.PHONY: run build unit-test
