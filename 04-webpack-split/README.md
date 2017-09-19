# 04 - Polymer 3 Project (with separate HTML & CSS files)

This is a basic skeleton/example of a Polymer 3 project using
[Webpack](https://webpack.github.io) to split the HTML and
CSS into separate files.

## How to install & run

```sh
yarn install
./node_modules/.bin/webpack
# serve however you like, I'm using PHP
php -S localhost:8089
```

## How it was made

[03-webpack](../03-webpack) was used as a starting point.

Then the `raw-loader` dependency was added:

```sh
yarn add raw-loader --dev
```

Then the `webpack.config.js` file was updated to use the
raw-loader for HTML and CSS.

Then the HTML and CSS from our component was split into
separate files (`src/my-app.html` & `src/my-app.css`).

Then `src/my-app.js` was modified to import the HTML
& CSS as strings, which are used in the component's
`template()` method.

Then Webpack was run as a build step:

```sh
./node_modules/.bin/webpack
```

## Changes from [03-webpack](../03-webpack)

- Separate HTML & CSS files means we get syntax
  highlighting and code completion "free" in our
  editor.

## Things that could be improved

- Requiring a build step _still_ kinda sucks
