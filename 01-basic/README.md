# 01 - Polymer 3 Project

This is a basic skeleton/example of a Polymer 3 project.

## How to install & run

```sh
yarn install
polymer serve --npm
```

## How it was made

The project directory was initialised using
[Furbish](https://github.com/MentallyFriendly/furbish). At a
high level Furbish does the following:

- Initialises the project using [Yarn](https://yarnpkg.com)
- Sets the `flat: true` in `package.json`
- Installs the project dependencies (`polymer@next` and
  `@webcomponents/webcomponentsjs`)
- Creates a skeleton for the project (`index.html` and
  `src/my-app.js`)

Then the `date` property was added in the `properties()`
method of `src/my-app.js`

Then an interval was defined that updates the `date` property
every two seconds in the `constructor()`.

Finally the `template()` method was updated to include some
styles and output the value of date.

## Changes from Polymer 2.x

- Uses NPM instead of Bower
- Written in JS instead of HTML
- Uses `<script type="module" ...` in `index.html` instead
  of `type="import"`
- Standard JS imports within component
- Static `is` getter method is gone
- New static `template` getter method
- Runs via `polymer serve` with `--npm` flag

## Things that could be improved

- Large chunks of the DOM for the component are re-rendered
  when the `date` property's value changes - see
  [02-lithtml](../02-lithtml)
- Browser support is extremely limited (as of September
  2017)
