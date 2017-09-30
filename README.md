# 🔋 React Device Battery

> 👀 In development

Notifies your React app of the device battery status

This component is based on the [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)

__The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change.__

## Demo

[![Edit react-battery](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/3kp5mjkj81)

## :package: Installation

```bash
npm install react-device-battery
```

## :rocket: Load

```js
// using es modules
import Battery from 'react-device-battery'

// common.js
const Battery = require('react-device-battery')

// AMD

```

Or use script tags and globals.

```html
<script src="https://unpkg.com/react-device-battery"></script>
```

And then grab it off the global like so:

```js
const Battery = reactDeviceBattery
```

## :bulb: Usage

Let's assume you want to check if you have enough battery before doing somenthing or you want to render based on how much battery you got left:

```javascript
const App = () => (
  <div>
    <h2>Magic is happening ⚡️</h2>
    <Battery 
      onChange={(battery ) => {
        console.log(battery)
      }}
      render={({ battery }) =>
        <p>Battery Level: {battery ? battery : <span>Not Supported</span>}.</p>
      } 
    />
  </div>
);

render(<App />, document.getElementById('root'));
```

> If the Battery API is not supported, the render function is passed `null`.

## Props

#### `render` [required]
Default: `null`

Whatever you'd like to render in response to changes in the battery level

```javascript
<Battery 
  render={({ battery }) =>
    <p>Battery Level: {battery ? battery : <span>Not Supported</span>}.</p>
  } 
/>
```

#### `onChange` [optional]
Default: `undefined`

Called whenever the batter level changes

```javascript
handleBatteryChange = ({ battery }) => {
  if (battery <= 10) {
    this.saveMyData(); // Oh my...
  }
}

<Battery 
  onChange={this.handleBatteryChange}
  render={({ battery }) =>
    <p>Battery Level: {battery ? battery : <span>Not Supported</span>}.</p>
  } 
/>
```

## Component info

This component has been built using `React Render Callback` pattern. Basically it is a way for the parent to provide some logic to the child, and the child have the control on how to execute that logic.

## Legal

Released under MIT license.
