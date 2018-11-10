# Taproom React

#### Epicodus project, 11.9.18

#### By Brendan Shea

## Description

Building an application with Angular was cool, but it's time to give another client-side router a go.

This project uses React to build a taproom that allows admins to update their keg list and allows users to view those kegs. For a look at what the project looked like in Angular, check the "Links" section below.

## Construction

![alt text](src/assets/images/component_tree.png "Component tree")

* **App Component:** houses all the other components in the application and is rendered in **index.jsx**.
* **Header Component:** header with logo.
* **Keg List Component:** loops through a hard coded database of kegs.
* **Keg Component:** passes props to display the kegs that were looped through in the keg list component.
* **Admin Component:** allows admins to sell pints, change prices, etc.
* **Error 404 Component:** a 404 error page that you're routed to if a wrong URL is used.

## Install Instructions

From the desktop:

* `git clone https://github.com/bjrshea/taproom-react.git`

From the project directory:

* `npm install`
* `npm run start`

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* React
* NPM
* Babel
* ES Lint

## Notes & Challenges

* None thus far

## Links

* [Taproom Angular](https://github.com/bjrshea/taproom-angular.git)
