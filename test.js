'use strict';
const { Worker, isMainThread } = require('worker_threads');

console.log(process.execArgv);

if (isMainThread)
    new Worker(__filename, {execArgv: process.execArgv});
