# Escape from DCM

## Description

`Escape from DCM` is the UI for an escape room for Data Capture Digital Marketing squad's 2019 Just Boo It Day demo.

<hr>

## Game Intro

Our focus room has been transformed into a user's browser. In order to enter, you must accept the Dutch privacy modal. Once inside, you'll find that your team is trapped in a marketing tag. Escaping the room requires that you correctly assemble the query string so that the tag can be fired, transmitting valuable consumer information to our marketing partner(s).

You have 5 minutes to escape!

<hr>

## Context

As the Data Capture Digital Marketing team at Nike, we provide DCM.js, a client-side digital marketing library for Nike web experiences.

### Marketing Tags

 - DCM.js delivers consumer data to Nike's marketing partners via `marketing tags`. If a vendor's marketing tag qualifies in the user's country, and the user allows tracking, the tag will "fire" and execute logic on specific events (such as page viewed, product added to cart, order confirmation, etc).

### Marketing Pixel

- When a `marketing pixel` fires, it makes a request to an image pixel's URL endpoint (contained in the img element's src attribute). The logic of a marketing tag executes to fill in values for each of the marketing pixel's URL parameters.

### URL Parameters

- URL parameters (or `params`), are values that compose the query string of a URL. These values are set by the marketing tag, and each param conatins a piece of data to be sent to the marketing partner.

<hr>

## Setup Locally

From the command line, run the following

- git clone https://github.com/JasminTrotter/dcm-escape-cube.git
- cd dcm-escape-cube
- yarn install
- yarn start

## Dependencies

[Create-React-App](https://github.com/facebook/create-react-app): framework with preconfigured tools like Webpack and Babel.

[React95](https://github.com/React95/React95): a component library inspired by the Windows 95 UI design.

[React-Spring](https://www.react-spring.io): spring animation library for our pop-up error screen.

[React-Timer-Hook](https://www.npmjs.com/package/react-timer-hook): a react hook that handles our stopwatch game timer.

[Styled-Components](https://www.styled-components.com): comes with ThemeProvider wrapper to injects React95 theme styling.

## Contributing

Pull Requests are welcome! Please make your code changes on a separate branch and run npm run test before your commit.
