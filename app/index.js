'use strict'
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({

	constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.option('test-framework', {
      desc: 'Test framework to be invoked',
      type: String,
      defaults: 'mocha'
    });

    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean
    });

    this.option('skip-install', {
      desc: 'Skips the installation of dependencies',
      type: Boolean
    });

    this.option('skip-install-message', {
      desc: 'Skips the message after the installation of dependencies',
      type: Boolean
    });
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    if (!this.options['skip-welcome-message']) {
      this.log(yosay('\'Allo \'allo! Out of the box I include Oars, Restify, and a gulpfile.js to build your app.'));
    }
  },

  writing: {
    index: function() {
      this.template('index.js')
    },

  	gulpfile: function () {
      this.template('gulpfile.js');
    },

    packageJSON: function () {
      this.template('_package.json', 'package.json');
    },

    git: function () {
      this.copy('gitignore', '.gitignore');
    },

    app: function () {
      this.mkdir('api');
      this.mkdir('api/controllers');
      this.mkdir('api/controllers/feature');
      this.copy('controllers/HomeController.js', 'api/controllers/HomeController.js');
      this.copy('controllers/feature/TestController.js', 'api/controllers/feature/TestController.js');

      this.mkdir('api/policies');
      this.copy('policies/sessionAuth.js', 'api/policies/sessionAuth.js');

      this.mkdir('api/services');

      this.mkdir('config');
      this.copy('config/log.js', 'config/log.js');
      this.copy('config/globals.js', 'config/globals.js');
      this.copy('config/middleware.js', 'config/middleware.js');
      this.copy('config/policies.js', 'config/policies.js');
      this.copy('config/routes.js', 'config/routes.js');
      this.copy('config/server.js', 'config/server.js');

      this.mkdir('env');
      this.copy('env/default.env', 'env/default.env');
      this.copy('env/pre.prod.env', 'env/pre.prod.env');
      this.copy('env/prod.env', 'env/prod.env');
      this.copy('env/default.env', '.env');

      this.mkdir('tasks');
    }
  },

  install: function () {
    var howToInstall =
      '\nAfter running ' +
      chalk.yellow.bold('npm install') +
      '.';

    if (this.options['skip-install']) {
      this.log(howToInstall);
      return;
    }

    this.installDependencies({
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install']
    });

    this.on('end', function () {

      // ideally we should use composeWith, but we're invoking it here
      // because generator-mocha is changing the working directory
      // https://github.com/yeoman/generator-mocha/issues/28
      this.invoke(this.options['test-framework'], {
        options: {
          'skip-message': this.options['skip-install-message'],
          'skip-install': this.options['skip-install']
        }
      });
    }.bind(this));
  }
});