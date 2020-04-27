# Weather App

## Installation

`yarn install` to install JS dependencies

## Running the App

`yarn start` to start the metro server

`yarn ios` to start the ios app

`yarn android` to start the android app

`yarn test` to run the test suite

## Considerations

I was able to implement some basic tests, but would need more time to iron out the issues in the configuration. Additionally, there is still much more functionality that can be tested, but was unable to get to that given the time constraints.

I think this implementation strikes a nice balance between organization/separation of concerns and code complexity. There is a single service which handles communication with the API, a context that organizes the component state, and a handful of presentational components that comprise the app component tree.
