#!/usr/bin/env node
"use strict";

var _commander = require("commander");
var _package = _interopRequireDefault(require("../../package.json"));
var _create = require("../lib/create");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_commander.program.command("create <projectName>").action(function (projectName) {
  // 处理逻辑
  (0, _create.create)(projectName).then(function () {
    console.log("创建成功");
  });
});
_commander.program.version("v".concat(_package["default"].version)).usage("<command> [options]");
_commander.program.parse(process.argv);