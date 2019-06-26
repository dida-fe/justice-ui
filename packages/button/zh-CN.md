# Button 按钮

### 引入

``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<justice-button type="default">默认按钮</justice-button>
<justice-button type="primary">主要按钮</justice-button>
<justice-button type="info">信息按钮</justice-button>
<justice-button type="warning">警告按钮</justice-button>
<justice-button type="danger">危险按钮</justice-button>
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<justice-button plain type="primary">朴素按钮</justice-button>
<justice-button plain type="danger">朴素按钮</justice-button>
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现

```html
<justice-button plain hairline type="primary">细边框按钮</justice-button>
<justice-button plain hairline type="danger">细边框按钮</justice-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<justice-button disabled type="primary">禁用状态</justice-button>
<justice-button disabled type="danger">禁用状态</justice-button>
```

### 加载状态

通过`loading`属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过`loading-text`设置加载状态下的文字

```html 
<justice-button loading type="primary" />
<justice-button loading type="primary" loading-type="spinner" />
<justice-button loading type="danger" loading-text="加载中..." />
```

### 按钮形状

通过`square`设置方形按钮，通过`round`设置圆形按钮

```html 
<justice-button square type="primary">方形按钮</justice-button>
<justice-button round type="danger">圆形按钮</justice-button>
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL

```html 
<justice-button icon="star-o" type="primary" />
<justice-button icon="star-o" type="primary">按钮</justice-button>
<justice-button icon="https://img.yzcdn.cn/vant/logo.png" type="danger">按钮</justice-button>
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<justice-button type="primary" size="large">大号按钮</justice-button>
<justice-button type="primary" size="normal">普通按钮</justice-button>
<justice-button type="primary" size="small">小型按钮</justice-button>
<justice-button type="primary" size="mini">迷你按钮</justice-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `primary` `info` `warning` `danger` | `String` | `default` | 1.6.6 |
| size | 尺寸，可选值为 `large` `small` `mini` | `String` | `normal` | - |
| text | 按钮文字 | `String` | - | - |
| icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | `String` | - | 2.0.0 |
| tag | HTML 标签 | `String` | `button` | - |
| native-type | 原生 button 标签 type 属性 | `String` | - | - |
| block | 是否为块级元素 | `Boolean` | `false` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` | 1.1.13 |
| square | 是否为方形按钮 | `Boolean` | `false` | 1.2.0 |
| round | 是否为圆形按钮 | `Boolean` | `false` | 1.3.4 |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - |
| hairline | 是否使用 0.5px 边框 | `Boolean` | `false` | 1.6.11 |
| loading | 是否显示为加载状态 | `Boolean` | `false` | - |
| loading-text | 加载状态提示文字 | `String` | - | 1.6.3 |
| loading-type | 加载图标类型，可选值为`spinner` | `String` | `circular` | 2.0.0 |
| loading-size | 加载图标大小 | `String` | `20px` | 1.6.7 |
| url | 跳转链接 | `String` | - | 1.6.5 |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | 1.6.5 |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | 1.6.5 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event |
| touchstart | 开始触摸按钮时触发 | event: TouchEvent |
