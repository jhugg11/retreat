/* jshint node: true */
'use strict';

let test = class MyClass {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(`My name is ${this.name}.`);
  }
};

module.exports = test;