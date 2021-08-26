#!/usr/bin/env node


const Twit = require("twit");
const keys = require("./keys");

if (keys.access_token === "your_token_here") throw new Error("Please add keys to keys.js")

let T = new Twit(keys)

process.argv.splice(0, 2)
T.post("statuses/update", {status: process.argv.join(" ")})
