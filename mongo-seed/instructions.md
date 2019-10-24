# Seeding Instructions

1. From the root of this project, `docker-compose up -d`.
2. Identify the id for the mongo container.
3. Jump into the container with `exec`: `docker exec -it <container_id> bin/bash`.
4. Confirm that `seedData` is in the `data` folder.
5. Import the data: `mongoimport --db groupon-slide-show --collection productImages --file seedData.json --jsonArray --drop` (note that this is assuming you're in the `data` folder already).