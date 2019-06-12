# React-microblog

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## :octopus: Getting Started

This project was made focusing on the flat architecture for high scalable projects. The App itself is small but is 100% ready to get as big as possible

:heavy_check_mark: Styled-Components

:heavy_check_mark: Dynamic Routes

:heavy_check_mark: Reusable Filter

:heavy_check_mark: Responsive SPA (Minimum resolution: 420px)

:heavy_check_mark: React@16

:heavy_check_mark: High Scale Svg Icons Workflow

:heavy_check_mark: Cross-Browser Solution! (even for MS Edge)

Made with :heart: and Redux-zero.

## :cloud: Installation

Makefiles aren't Windows friendly, if you have minGW64 and whole environment to run the makefile(Unix/macOS) do this:

```sh
make installation
make start
access http://localhost:3000/
```

If you **don't** have makefile enviroment ready, do this instead :

```sh

npm install or yarn install
npm run start
access http://localhost:3000/
```

**Requires node >= 8.9.3**

## Why Redux-zero as a state manager over redux?

[Redux-zero](https://github.com/redux-zero/redux-zero) is a lightweight state container based on Redux.
I would like to share 3 arguments to choose redux-zero over redux.

1. Is lighter(less than 1kb) than redux and in projects that are not necessarily high usage of reducers, it helps to focus on what is important.
2. I participated in the conception of this lib, made mostly by an ex-coworker.
3. I'm currently focusing my career in leadership and share knowledge that I've learned across these years, so would be
   an honor gives a presentation about this amazing library.

More about Redux-zero [here](https://medium.com/@matheusml/introducing-redux-zero-bea42214c7ee)

## Unit Tests

`npm run test:coverage` **Coverage Threshold > 60%**. Currently tests ~= 72%.

**The Unit tests was made focusing in API responses and changing state according expected behaviors**

## Features

1. Publications - At the root of the page you can see all the articles at the first moment.
2. Summary - There's a sidebar at the left of the page that displays the title of each publication.
3. Filter - There's a filter at the top of the page that allows you to filter by: author, oldest and newest.
4. Ordered Publications - Makes part of the filter.

## Roadmap

**Release 0.1** (current) - First release of the app

**Release 0.2** - Improvements in mobile devices resolutions

**Release 0.3** - Improvements in UX and transistions

## :exclamation: Credits

Yuri Ramos

## :scroll: License

MIT
