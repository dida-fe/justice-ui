# Button

### Install

``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

## Usage

### Type

```html
<justice-button type="default">Default</justice-button>
<justice-button type="primary">Primary</justice-button>
<justice-button type="info">Info</justice-button>
<justice-button type="danger">Danger</justice-button>
<justice-button type="warning">Warning</justice-button>
```

### Plain

```html
<justice-button plain type="primary">Primary</justice-button>
<justice-button plain type="danger">Danger</justice-button>
```

### Hairline

```html
<justice-button plain hairline type="primary">Hairline</justice-button>
<justice-button plain hairline type="danger">Hairline</justice-button>
```

### Disabled

```html
<justice-button disabled type="primary">Diabled</justice-button>
<justice-button disabled type="danger">Diabled</justice-button>
```

### Loading

```html 
<justice-button loading type="primary" />
<justice-button loading type="primary" loading-type="spinner" />
<justice-button loading type="danger" loading-text="Loading..." />
```

### Shape

```html 
<justice-button square type="primary">Square</justice-button>
<justice-button round type="danger">Round</justice-button>
```

### Icon

```html 
<justice-button icon="star-o" type="primary" />
<justice-button icon="star-o" type="primary">Button</justice-button>
<justice-button icon="https://img.yzcdn.cn/vant/logo.png" type="danger">Button</justice-button>
```

### Size

```html 
<justice-button type="primary" size="large">Large</justice-button>
<justice-button type="primary" size="normal">Normal</justice-button>
<justice-button type="primary" size="small">Small</justice-button>
<justice-button type="primary" size="mini">Mini</justice-button>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | `String` | `default` |
| size | Can be set to `large` `small` `mini` | `String` | `normal` |
| text | Text | `String` | - |
| icon | Left Icon | `String` | - |
| tag | HTML Tag | `String` | `button` |
| native-type | Native Type Attribute | `String` | `''` |
| plain | Whether to be plain button | `Boolean` | `false` |
| block | Whether to set display block | `Boolean` | `false` |
| round | Whether to be round button | `Boolean` | `false` |
| square | Whether to be square button | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| loading-text | Loading text | `String` | - |
| loading-type | Loading type, can be set to `spinner` | `String` | `circular` |
| loading-size | Loading icon size | `String` | `20px` |
| url | Link URL | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | event: Event |
| touchstart | Triggered when touch start | event: TouchEvent |
