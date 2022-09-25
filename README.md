## Prerequisite
- `node`: `^14.17.3`
- `npm`: `^6.14.13`
- `React`: `^17.0.2`
- `Typescript`: `^4.5.4`
- `MUI`: `^5.10.6`
- `react-router-dom`: `^5.3.0`,

### Set up
- `yarn install`

### Run, test, build
- `yarn start`
- `yarn test`
- `yarn build`

## Appllication structure
- `assets`: Assets folder contains:
  - `Imagine`: All application images
  - `icons`: all icons

- `component`: Components folder contains:
  - All components of project
  - Some react `icons` component

- `container`: Container folder contains:
  - `ColumnPage`: `/` colum page
  - `HomePage`: `/my-diary` Diary page => required authen 
  - `MyRecordPage`: `my-record` My record page => Required authen 
    - access `/my-record` => `/login` => `/my-record`

- `layouts`:
  - Contain main layout of project including: `Header` and `Footer`

- `hooks`
  - Contain all custom hooks

- `mock` folder
  - Store mock data

- `themes`
  - Includes custom theme

