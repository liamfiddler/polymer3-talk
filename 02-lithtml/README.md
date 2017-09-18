# 02 - Polymer 3 Project (with lit-html)

This is a basic skeleton/example of a Polymer 3 project using
[lit-html](https://github.com/PolymerLabs/lit-html).

## How to install & run

```sh
yarn install
polymer serve --npm
```

## How it was made

[01-basic](../01-basic) was used as a starting point.

Then lit-html was added as a dependency:
```sh
yarn add PolymerLabs/lit-html
```

Then Typescript was installed:
```sh
npm install -g typescript
```

Then lit-html was built:
```sh
cd ./node_modules/lit-html
npm install
npm run build
```

(at this stage I deleted the node_modules directory that had been
created _inside_ the lit-html directory, but this isn't required)

Then the `html` and `render` functions were imported from
lit-html into the component.

Then a `render()` method was added to the component which replaces
the default Polymer `template()` method with some lit-html script.

Finally an observer method was defined for the date property which
tells the component to re-render when the value changes.

## Changes from [01-basic](../01-basic)

- Uses [lit-html](https://github.com/PolymerLabs/lit-html) instead
  of Polymer's default templating
- Only updates the dynamic parts of templates - static parts are
  untouched, not even walked for diffing, after the initial render

## Things that could be improved

- Having to install Typescript and having to build lit-html is
  a little disappointing, but might not feel so bad if we had a
  full build step for the rest of the project
- Browser support is extremely limited (as of September
  2017)
