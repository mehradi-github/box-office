# Box Office

The Movie App was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

- [Box Office](#box-office)
  - [Installing Requirements](#installing-requirements)
  - [RTK Query](#rtk-query)
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
## RTK Query 
[RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query) is an advanced data fetching and caching tool, designed to simplify common cases for loading data in a web application. RTK Query itself is built on top of the Redux Toolkit core, and leverages RTK's APIs like createSlice and createAsyncThunk to implement its capabilities.

RTK Query is included in the @reduxjs/toolkit package as an additional addon. You are not required to use the RTK Query APIs when you use Redux Toolkit, but we think many users will benefit from RTK Query's data fetching and caching in their apps.

## Refusing to merge unrelated histories
The “fatal: refusing to merge unrelated histories” Git error occurs when two unrelated projects are merged (i.e., projects that are not aware of each other’s existence and have mismatching commit histories).
```bash
git pull origin main --allow-unrelated-histories
```