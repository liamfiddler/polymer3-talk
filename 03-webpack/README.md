# 03 - Polymer 3 Project (with Webpack)

This is a basic skeleton/example of a Polymer 3 project using
[Webpack](https://webpack.github.io).

## How to install & run

```sh
yarn install
./node_modules/.bin/webpack
# serve however you like, I'm using PHP
php -S localhost:8089
```

## How it was made

[01-basic](../01-basic) was used as a starting point.

Then some dependencies were added, with the latest version of
each package selected when prompted to choose:

```sh
yarn add webpack babel-core babel-loader babel-preset-env --save-dev
```

Then a `webpack.config.js` file was created

Then the import path of `polymer-element` was changed in
`src/my-app.js`.

Then a couple of extra scripts were added to `index.html` to
add ES5 support for web components. Credit to the authors of
[Polymer Webpack Loader](https://github.com/webpack-contrib/polymer-webpack-loader/blob/0946e3c30994b2f5a71bd7c70dd8be60fb56c0ea/demo/src/index.ejs)

Then Webpack was run as a build step:

```sh
./node_modules/.bin/webpack
```

## Changes from [01-basic](../01-basic)

- Browser support is greatly increased due to the use of Babel

## Things that could be improved

- Compiled code could be conditionally loaded for older
  browsers using `<script nomodule src="fallback.js"></script>`
  and web components sent to newer browsers
- Requiring a build step kinda sucks
