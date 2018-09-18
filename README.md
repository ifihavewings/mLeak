# ms

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 基本规范
 1. 公共函数写在@/utils/common.js中,调用方法this.$cmn.callMethod(params);
 2. 引用文件使用@，@=src目录;
 3. 跳转页面使用name;
 4. XSRF xss攻击
 5. 文件夹名字小写，vue文件首字母大写
 6. 组件name 大写首字母，组件path小写