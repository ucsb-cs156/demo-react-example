# demo-react-example

This repo is a cousin of demo-spring-react-example

It was produced by starting with demo-spring-react-example, removing all of the
Spring Boot backend code, leaving only a React app, and then adapting that
React app so that it would run on GitHub pages, using the techniques
described in this repo:

* <https://github.com/gitname/react-gh-pages>

A pure React app has no backend, so it can only compute using what the user types in
or uploads, and storage is limited.  

One kind of storage it can use is "local storage", which is a key/value store that is
located on the client machine, and associated with a specific browser (it is not
shared across browsers.)

# Storybook

Storybook is here:
* Production: <https://ucsb-cs156.github.io/demo-react-example-docs/>
* QA:  <https://ucsb-cs156.github.io/demo-react-example-docs-qa/>

The GitHub actions script to deploy the Storybook to QA requires some configuration; see [docs/github-actions.md](docs/github-actions.md) for details.

If these repos are not yet setup, see the setup steps in [`docs/storybook.md`](docs/storybook.md).


# Getting Started on localhost

```
cd frontend
npm install  # only on first run or when dependencies change
npm start
```

Then, the app should be available on <http://localhost:3000>


# Getting Started on GitHub Pages

Edit the `frontend/package.json` file to change this entry:

```
  "homepage": "https://ucsb-cs156.github.io/demo-react-example",
```

To one that matches the GitHub organization or user for your repo, 
for example 

* Using the Heroku CLI:
  ```
  heroku config:set PRODUCTION=true --app <heroku app name>
  ```
* Or set it on the Heroku Dashboard:
  ![image](https://user-images.githubusercontent.com/1119017/149855768-7b56164a-98f7-4357-b877-da34b7bd9ea4.png)

You'll also need to follow the OAuth set up instructions here: [`docs/oauth.md`](docs/oauth.md).

If you get the following message on Heroku, it probably means that you failed to setup the `PRODUCTION` environment variable.

```
Failed to connect to the frontend server... On Heroku, be sure that PRODUCTION is defined.  On localhost, open a second terminal window, cd into frontend and type: npm install; npm start";
```

# Accessing swagger

To access the swagger API endpoints, use:

* <http://localhost:8080/swagger-ui/index.html>


# To run React Storybook

* cd into frontend
* use: npm run storybook
* This should put the storybook on http://localhost:6006
* Additional stories are added under frontend/src/stories

* For documentation on React Storybook, see: https://storybook.js.org/

# SQL Database access

On localhost:
* The SQL database is an H2 database and the data is stored in a file under `target`
* Each time you do `mvn clean` the database is completely rebuilt from scratch
* You can access the database console via a special route, <http://localhost:8080/h2-console>
* For more info, see [docs/h2-database.md](/docs/h2-database.md)

On Heroku:
* The SQL database is a postgres database provisioned automatically by Heroku
* You can reset it with `heroku pg:reset --app app-name-goes-here`
* More info and instructions for access the SQL prompt are at [docs/postgres-database.md](/docs/postgres-database.md)
