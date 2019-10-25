# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

**Generate Fake Data**

`npm run seed-data` -- will run generate fake data using `fakeDataGen.js` and import into MongoDB.

**Build the Bundle**

`npm run webpack-dev` -- will start webpack in development mode and watch files for changes.

`npm run webpack-build` -- will run webpack in production mode. The bundle will be placed in `/public`.

**Start the Server**

`npm start` -- will run the server.

`npm run dev-server` -- will run the development server and watch for changes.

**IMPORTANT**: After you've seeded the database, built the bundles, and started up your server, you can confirm that everything is operating as intended by visiting `http://localhost:3002?productId=1` in your browser. This component identified which productId to render images according to the `productId` url query string.

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Deploy via Docker

1. Use the `docker-compose.yml` file to compose your containers/images: `docker-compose up`.
2. Seed the database by following the instructions in `/mongo-seed/instructions.md`.
