# Volunteers NG [![CircleCI](https://circleci.com/gh/chidioguejiofor/volunteersng-api/tree/staging.svg?style=svg)](https://circleci.com/gh/chidioguejiofor/volunteersng-api/tree/staging) [![Maintainability](https://api.codeclimate.com/v1/badges/72e8c4caa0845c1f72b2/maintainability)](https://codeclimate.com/github/chidioguejiofor/volunteersng-api/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/72e8c4caa0845c1f72b2/test_coverage)](https://codeclimate.com/github/chidioguejiofor/volunteersng-api/test_coverage)

An app that helps volunteers connect with non-profits

## The following is Required on your machine to run this Project

- [Node.js](https://nodejs.org/en/download/current/)
- [Postman](https://www.getpostman.com/apps) Native or Postman [Chrome extension]
- [Postgres](https://www.postgresql.org/download/) Database or create an Online [Elephant sql](https://www.elephantsql.com/) database
- [Git](https://git-scm.com/downloads)

### DB setup

- Install Postgres
- Create db related config values in 
`.env` 
file following
`.env-sample`


### Commit message Setup

To setup commit run `git config --local commit.template .gitmessage`

### Run in Development mode

- Run
```bash
yarn dev
```
This should start the app in development mode on `http://localhost:3000`
