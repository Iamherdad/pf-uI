# 介绍

## 开发目的

这是我在学习react过程中开发的一个简单框架，希望对你有所帮助

## 基本信息

lpf-UI是一个基于React的PC端UI组件库，目前包括有Button、Alert、AutoComplete、Icon、Input、Menu、Progress、Upload组件，项目尚未完工，持续更新中。

lpf-UI是个人学习过程中造出来的UI库，如果你在使用过程中发现问题， 非常感谢你提出宝贵意见。 PS：目前项目属于开发中，暂不建议在生产项目中使用。

# 快速上手



## 安装



```js
npm i lpf-ui
```

```js
yarn add lpf-ui
```

## 示例



```js
import { Button, Input } from "lpf-ui"

const App = () => (
  <>
    <Button btnType="primary">PRESS ME</Button>
      <Input defaultValue="input" />
  </>
);
```

## 引入样式

```js
import "lpf-ui/dist/index.css";
```

以上代码便完成了 lpf-ui 的引入。需要注意的是，样式文件需要单独引入。

