# aspnet-skeleton-navigation

This skeleton is an example of how to utilize [Aurelia](http://www.aurelia.io/) with Visual Studio 2013 and Typescript. 
It sets up a standard navigation-style app using the Typescript compiler. Gulp is used to copy all html, ts, js, and map files to the dist\ directory. Karma/Jasmine testing is also configured. 
Integration of npm and jspm with the Visual Studio is provided but is disabled by default due to resource usage.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [our Gitter Channel](https://gitter.im/Aurelia/Discuss).

## Installing Dependencies
1. Install the [Task Runner Explorer](https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708) Visual Studio Extension.

2. Install the [Typescript 1.3](https://visualstudiogallery.msdn.microsoft.com/955e0262-0858-40c9-ab5a-1acc680e9bfd) Visual Studio Extension.

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

1. Open the project in Visual Studio.

2. Set Visual Studio to launch using Google Chrome. See below for instructions on running the app using Internet Explorer.

3. Press F5 to run the project. 

> Note: The build process will run `npm install` and `jspm install`. For this reason, the first build will take quite a while.

> Note: Visual Studio sometimes launches the browser before Gulp has finished deploying changes. If you get a black screen, try hitting refresh.

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