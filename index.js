#!/usr/bin/env node

const glob = require("glob");

const [,,pattern] = process.argv;

const options = {
  nodir: true,
};
const files = glob.sync(pattern, options);

console.log(files.join("\n"));
