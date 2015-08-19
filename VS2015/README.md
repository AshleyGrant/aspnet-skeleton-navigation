# aspnet-skeleton-navigation

This skeleton is an example of how to utilize [Aurelia](http://www.aurelia.io/) with Visual Studio 2015. 
It sets up a standard navigation-style app. Gulp is used to copy all html, js, and map files to the dist\ directory. Karma/Jasmine testing is also configured. 

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [our Gitter Channel](https://gitter.im/Aurelia/Discuss).

## Installing Dependencies
1. Make sure that Git is installed and the path to the Git executable is in the $PATH system variable. Either [Git for Windows](http://git-scm.com/download/win) or [GitHub for Windows](https://windows.github.com/) should work for this.

2. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.

3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```

## Running The App

To run the app, follow these steps.

1. From the command line in the root folder of the project (not the solution) run `npm install`. 

2. From the command line in the root folder of the project (not the solution) run `jspm install`. 

3. Open the project in Visual Studio.

4. Set Visual Studio to launch using Google Chrome. See below for instructions on running the app using Internet Explorer.

5. Press F5 to run the project. 

> Note: At present there is a bug in the HTMLImports polyfill which only occurs on IE. We have submitted a pull request to the team with the fix. In the mean time, if you want to test on IE, you can work around the issue by explicitly adding a script tag before you load system.js. The script tag should look something like this (be sure to confirm the version number):

```html
<script src="jspm_packages/github/webcomponents/webcomponentsjs@0.5.2/HTMLImports.js"></script>
```

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. You can now run the tests with this command:

  ```shell
  karma start
  ```
  
## Contributing

We'd love for you to contribute to our source code and to make this project even better than it is today! If this interests you, please begin by reading [our contributing guidelines](https://github.com/DurandalProject/about/blob/master/CONTRIBUTING.md). The contributing document will provide you with all the information you need to get started. Once you have read that, you will need to also [sign our CLA](http://goo.gl/forms/dI8QDDSyKR) before we can accepts a Pull Request from you. More information on the process is including in the [contributor's guide](https://github.com/DurandalProject/about/blob/master/CONTRIBUTING.md).