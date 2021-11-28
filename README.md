# React-microblog

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

![image](https://user-images.githubusercontent.com/7452143/124509296-1581bb80-dda8-11eb-89a1-62c35babe94a.png)

## :octopus: Getting Started

This project was made focusing on the flat architecture for high scalable projects. The App itself is small but is 100% ready to get as big as possible


|     | Specs                                                                                                                            |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| ⚛️  | **React 16.12**. latest stable version of react                                                                                  |
| ✨  | **React Hooks** [React hooks](https://reactjs.org/docs/hooks-intro.html)                                                         |
| 😎  | **TypeScript** JavaScript that scales.                                                                                           |

## :cloud: Installation

Makefiles aren't Windows friendly, if you have minGW64 and whole environment to run the makefile(Unix/macOS) do this:

```sh
make installation
make start
access http://localhost:8080/
```

If you **don't** have makefile enviroment ready, do this instead :

```sh

npm install or yarn install
npm run start
access http://localhost:8080/
```

**Requires node >= 10.0.0**


## Unit Tests

`npm run test:coverage`

**Coverage Threshold > 70%**

Coverage Tests = 82%.

[Testing Behaviors and not implementation details](https://kentcdodds.com/blog/testing-implementation-details)

## Features

1. Publications - At the root of the page you can see all the articles at the first moment.
2. Latest Posts - Display latest post by date.
3. Filter - There's a filter at the top of the page that allows you to filter by author.
4. Ordered Publications - Makes part of the filter.

## Roadmap

**Release 0.1** (current) - First release of the app

**Release 0.2** - Improvements in mobile devices resolutions

**Release 0.3** - Improvements in UX and transistions

## :exclamation: Credits

Yuri Ramos

## :scroll: License

MIT
