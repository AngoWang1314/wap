# dtwap

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 目录结构

### pages

放置页面文件，每个建一个同名文件夹，里面放一个同名 vue 文件

### components

放置组件文件，每个建一个同名文件夹，里面放一个同名 vue 文件。这里的组件可以是自己写的，也可以是 uni-app 插件市场下载的。

### common

放置公共 js 文件，每个建一个同名文件夹，里面放一个同名 js 文件。

### fetch

放置 api 封装文件，暂时是借鉴了别的项目的做法，准备重新封装。

### static

放置静态文件，如图片

### store

放置 vuex 相关文件，入口文件为 index.js，为了防止 typo，所有 ACTION 都需要定义成 const 常量来使用，这些常量定义在 types.js 里。按页面将 store 分成多个模块，存放在 modules 里。

## 请求接口的封装

暂时是将所有请求封装在 store 的 modules 里，每次需要请求数据，就 dispatch 一个 action，action 里会异步请求接口。请求成功就会提交 mutation 更新数据到 store 里。然后再页面只需要通过 getter 自动获取到数据。所以接口请求的数据都是存在 store 里。