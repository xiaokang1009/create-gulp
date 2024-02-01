#!/usr/bin/env node

import { program } from "commander"
import packageJson from "../../package.json"
import { create } from "../lib/create"
program.command("create <projectName>").action(projectName => {
  // 处理逻辑
  create(projectName).then(() => {
    console.log("创建成功")
  })
})
program.version(`v${packageJson.version}`).usage("<command> [options]")

program.parse(process.argv)
