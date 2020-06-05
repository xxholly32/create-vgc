#!/usr/bin/env node

const yParser = require("yargs-parser");
const run = require("./lib/run");

// print version and @local
const args = yParser(process.argv.slice(2));
const name = args._[0] || "";
run({
  name,
  args,
});
