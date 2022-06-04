run:
	docker-compose run app

build:
	docker-compose build builder

test:
	docker-compose run unit-test

.PHONY: run build unit-test
