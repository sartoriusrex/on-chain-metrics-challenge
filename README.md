# Frontend Engineer Coding Challenge

## Requirements:

You will need a [Glassnode Studio Account](https://studio.glassnode.com/) and an API Key to fetch necessary data. You 
can obtain a free key by registering a new account (studio.glassnode.com) and navigating to the 
[Settings/API page](https://studio.glassnode.com/settings/api) to generate it. Once you have it you can learn more how 
to get data from our [docs](https://docs.glassnode.com/general-info/api-key).

Generate a repository for your solution from the provided template ("Use this template" button on github), and send us 
a link to your repository.

## How to Complete a Challenge

Simply organize your code in a folder, scripts and READMEs - anything you'd like to provide. 

## Time

We respect your time and the challenge is designed in such a way as not to take more than 3-4 hours. We just want to 
get a sense of your thought process and the way you do the work. If there are things you don't have time to implement, 
feel free to describe the intended approach to implementation in the README.

## Overview

Create a webapp that allows for a simple data presentation layer of on-chain metrics. It should render an interactive 
chart (with Price USD and selected On-Chain Metric). Users should be able to hover over the point on the chart and see 
a tooltip with information like:
- metric name
- metric value
- price value - in US dollars 
- date

Necessary endpoints:
- https://api.glassnode.com/v1/metrics/mining/difficulty_latest?a=BTC&i=24h
- https://api.glassnode.com/v1/metrics/mining/hash_rate_mean?a=BTC&i=24h
- https://api.glassnode.com/v1/metrics/market/price_usd_close?a=BTC&i=24h

You would need to provide an `apiKey` param to fetch data in your app (if you’re logged to studio, you will be able to 
see the response in your browser)

The app should have three pages:
- /
- /difficulty
- /hash-rate

### Root page: `/`
Default entry point. It needs to contain a basic navigation component (navbar, sidebar or other) which will be displayed 
on other pages as well. In the place where content is going to be visible there should be a message:

```
Please select a metric you would like to display
```

### Difficulty Metric: `/difficulty`

It needs to contain basic navigation (see above) and chart component. Navigating to that page should fetch necessary 
information from our API and display it to the users. It needs to contain information about the Price (log scale) and 
Difficulty (lin scale).

### Hash Rate Metric: `/hash-rate`

It needs to contain basic navigation (see above) and chart component. Navigating to that page should fetch necessary 
information from our API and display it to the users. It needs to contain information about the Price (log scale) and 
Hash Rate (lin scale).

### Architecture

- Your solution should be written in React. You may use create-react-app, nextjs or anything else to bootstrap your development.
- For UI you can use any framework of your choice (AntDesign, Tailwind, etc.) or write your own CSS.
- You're free to use any charts library. Think about the best fit for solving the task.
- For state management you may use a state-management library such as Redux or similar, React Context API or React's setState().
- Make sure it works in latest Chrome, Safari or Firefox
- App should be responsive - it should look good on Mobile (>375px width) and Desktop (>1024px width)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
