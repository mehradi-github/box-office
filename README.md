# Box Office

The Movie App was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

- [Box Office](#box-office)
  - [Installing Requirements](#installing-requirements)
  - [Refusing to merge unrelated histories](#refusing-to-merge-unrelated-histories)

## Installing Requirements
Learn more: [Install ESLint, Prettier, ESLint Plugin for Testing Library, ESLint Plugin for Jest DOM](https://github.com/mehradi-github/jest-rtl/)

ESLint Plugin for Testing Library
[https://github.com/testing-library/eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)

ESLint Plugin for Jest DOM
[https://github.com/testing-library/eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)

```
npm i --save react-query axios react-icons react-router-dom
```

## Refusing to merge unrelated histories
The “fatal: refusing to merge unrelated histories” Git error occurs when two unrelated projects are merged (i.e., projects that are not aware of each other’s existence and have mismatching commit histories).
```bash
git pull origin main --allow-unrelated-histories
```