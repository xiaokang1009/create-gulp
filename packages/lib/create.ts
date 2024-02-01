import fs from 'fs-extra'
import inquirer from 'inquirer'
import path from 'path'

const generator = async (projectName: string) => {
  try {
    // 1.获取模板文件夹的路径
    const templateDir = path.resolve(__dirname, '../template')
    // 创建项目文件夹
    await fs.mkdir(path.resolve(process.cwd(), projectName))
    // 2.将模板文件夹拷贝到当前目录下
    await fs.copy(templateDir, path.resolve(process.cwd(), projectName))
    // 3.创建 js scss views libs images 文件夹
    await fs.mkdir(path.resolve(process.cwd(), projectName, 'src'))
    await fs.mkdir(path.resolve(process.cwd(), projectName, 'src/js'))
    await fs.mkdir(path.resolve(process.cwd(), projectName, 'src/scss'))
    await fs.mkdir(path.resolve(process.cwd(), projectName, 'src/views'))
    await fs.mkdir(path.resolve(process.cwd(), projectName, 'src/libs'))
    await fs.mkdir(path.resolve(process.cwd(), projectName, 'src/images'))
  } catch (error) {
    console.log(error)
  }
}

const create = async (projectName: string) => {
  // 判断是否存在同名文件夹
  const targetDir = path.resolve(process.cwd(), projectName)
  const isExist = await fs.pathExists(targetDir)
  if (isExist) {
    // 存在同名文件夹
    const { isCover } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'isCover',
        message: '是否覆盖同名文件夹？ y/n',
        default: 'y'
      }
    ])
    if (isCover) {
      await fs.remove(targetDir)
    }
  }
  // 创建模板文件
  await generator(projectName)
}
export { create }
