# Webpack 5 Module Federation with React

This project consist of three pieces: a host app `shell` and two remotes `app1` `app2`.

- `app1` exposes `CounterAppOne` component.
- `app2` exposes `CounterAppTwo` header component.
- `shell` imports `CounterAppOne` and `CounterAppTwo` components.

## Running the Demo

```bash
npx lerna bootstrap
npm start
```

Lerna will start all 3 projects.

- http://localhost:3000/ (shell)
- http://localhost:3001/ (app1)
- http://localhost:3002/ (app2)

## Tech Stack

React, Typescript, Chakra UI, Webpack, Lerna, React Router
