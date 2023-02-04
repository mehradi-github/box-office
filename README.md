# Box Office

The Movie App was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

- [Box Office](#box-office)
  - [Refusing to merge unrelated histories](#refusing-to-merge-unrelated-histories)

```
npm i --save react-query axios react-icons react-router-dom
```

## Refusing to merge unrelated histories
The “fatal: refusing to merge unrelated histories” Git error occurs when two unrelated projects are merged (i.e., projects that are not aware of each other’s existence and have mismatching commit histories).
```bash
git pull origin main --allow-unrelated-histories
```