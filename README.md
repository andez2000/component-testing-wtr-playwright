# Getting Started

To test our web component we need to use the web test runner with a repackaged test framework for the runner.

```console
npm init
npm i --save-dev @web/test-runner
npm i --save-dev @web/test-runner-playwright
npm i --save-dev @open-wc/testing
npm i --save-dev @web/dev-server
```

Add a `src` folder for our component.
Add a `test` folder for our component tests.

Add our component to the src folder and add our test to the test folder.

# Run the test

```console
npm test
wtr test/**/*.test.js --node-resolve --playwright --browsers chromium firefox webkit
```