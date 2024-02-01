"use strict";

module.exports = {
  normal: {
    // 通用配置
    inputJs: "src/js/**/*.js",
    inputScss: "src/scss/**/*.{scss,sass}",
    inputHtml: "src/views/**/*.html",
    inputImg: "src/images/**/*.{png,jpg,jpeg,gif,svg,avif}",
    inputLib: "src/lib/**/*",
    cssSplitBeforeSrc: /\.\.\/images\//g,
    //样式文件分离前的路径
    jsSplitBeforeSrc: /\.\/images\//g,
    //js文件分离前的路径
    htmlSplitBeforeSrc: /\.\/images\//g,
    //html文件分离前的路径
    inputSrc: "src",
    imageName: "images"
  },
  dev: {
    // 开发环境
    port: 3060,
    outputDir: "dev",
    outputImgSrc: "images",
    isBabel: false,
    isSprite: false,
    isCssMinify: false,
    isJsMinify: false
  },
  prod: {
    // 生产环境
    imgIgnore: "src/images/sprite/*.{png,jpg}",
    // 忽略需要合成的精灵图文件
    outputDir: "dist",
    isBabel: true,
    isSprite: true,
    outputImgSrc: "ossweb-img",
    imgSplitSrc: "",
    // 分离路径
    isCssMinify: false,
    isJsMinify: false,
    isHtmlMinify: false,
    // 转换编码 例如: utf8 => gbk html文件中 charset="utf-8" => charset="gbk"
    // 其他的不用改, 会自动转换,开发文件编码只能是utf8, 如果需要开启则设置为true,默认 uft8 -> gbk 一般开发不需要开启
    isEncoding: false
  }
};