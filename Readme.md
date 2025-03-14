# Shopping Cart Application Exercise

This project was was bootstrapped to include basic Node.js (22.x) environment using nvm.

It showcase an app for a computer store checkout system. We want to offer different products to clients. There is a pre-defined setup of opening day specials. As the Sales manager is quite indecisive, these set of rules are regularly monitored, hence these pricing rules needs to be as flexible as possible so changes can be made with little notice.

The checkout system can scan items in any order.

The interface to our checkout will support the following operations:

- Scan an item
- Get the total price

## NPM modules used

In this project, we using npm as package manager. The main modules used are

- Typescript
- Jest (using ts-jest)
- ESLint + Prettier
- lint-staged
- Nodemon
- Husky with git hooks support for `pre-commit`

## Pre-Requirements

Make sure you have node 22.x release on your machine. You can use [nvm](https://github.com/nvm-sh/nvm) to access different node releases. From the project root folder run `nvm use` to execute the recommended Node.js release
This app was tested with latest Node.js 22.14.0 release

## Install

Clone the project and install using `npm`:

```bash
git clone https://github.com/alonfai/CheckoutApp

// Inside the project root run the following command to install necessary dependencies
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development/watch mode.

## `npm test`

Launches the test environment with Jest

### `npm run test:watch`

Launches the test environment in watch mode

### `npm run test:coverage`

Launches the Jest test runner in coverage mode. It has an integrated coverage reporter that works well with ES6 and requires no configuration.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run lint`

Executes `eslint` linter

### `npm run format`

Executes `eslint` linter and with auto fix mode on

### `npm run prettier`

Executes the `prettier` formatting module

### `npm run lint:full`

Executes the `prettier` and `lint` scripts together
