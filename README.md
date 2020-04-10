[![npm version](https://img.shields.io/npm/v/@balticcode/ngx-example-viewer.svg)](https://www.npmjs.com/package/@balticcode/ngx-example-viewer)
# @balticcode/ngx-example-viewer

An Angular library providing an example viewer like the one from Angular Material.

---

First of all we want to send probs to all the contributors of [Angular Material](https://github.com/angular/components) and [ngx-formly](https://github.com/ngx-formly/ngx-formly) who gave us the solid base on which this library was created.

---

* [Installation](#installation)
  * [Via npm](#via-npm)
  * [Via ng-add](#via-ng-add)
* [Usage](#usage)
  * [Getting started](#getting-started)
  * [Material theme](#material-theme)
  * [Code theme](#code-theme)
    * [Supported themes](#supported-themes)
    * [Supported languages](#supported-languages)

## Installation
#### Via npm:
```
npm install @balticcode/ngx-example-viewer highlight.js
```
You will manually have to add the module import of `ExampleViewerModule` into the desired module.

#### Via ng-add
```
ng add @balticcode/ngx-example-viewer
```
This will:
* Add `@balticcode/ngx-example-viewer` and its peer dependencies into `package.json`
* Run `npm install`
* Import `ExampleViewerModule` into the root module of your default application (or define a project by using `--project <PROJECT_NAME>` and/or `--module <MODULE_PATH>` as additional CLI parameters)

## Usage

#### Getting started

Check out the demo on how to use this library [here](https://balticcode.github.io/ngx-example-viewer#getting-started).

#### Material theme

Besides the basic component theming you can inject your Angular Material theme to make the example viewer match the rest of your application. [Here's](https://balticcode.github.io/ngx-example-viewer#material-theme) how it works.

#### Code theme

This library utilizes `hightlight.js` to provide a themed source view including syntax highlighting. Check out the [docs](https://balticcode.github.io/ngx-example-viewer#code-theme) to see how to make it work.

##### Supported themes

All available themes can be found [here](https://github.com/highlightjs/highlight.js/tree/master/src/styles).


##### Supported languages

All languages which support syntax highlighting can be found [here](https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md)