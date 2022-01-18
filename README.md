
# Tark React Components

React components including Button and Dropdown.

### 🏠 [Homepage](https://github.com/amanchhetri/react-components)

## Install

```sh
npm i test-tark-components
```

## Components


### 1. Dropdown
Custom dropdown styles

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
data|arrayOf|yes|['Option 1', 'Option 2, 'Option 3']| Array of options

#### Screenshot
-----

![Dropdown](https://i.imgur.com/tmfiBpY.png)

### 2. Button
Custom button styles

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
variant|string|no|'Light'|Style of the button
size|string|no|'medium'| Size of the button
label|string|no|'Button'| Label of the button

#### Screenshot
-----

![Button with variant prop](https://i.imgur.com/LxKWor8.png)
![Button with size prop](https://i.imgur.com/DNptl68.png)


-----

## Usage/Examples

```javascript
import {Dropdown, Button} from 'test-tark-components';

function App() {
  const data = ['Option A', 'Option B', 'Option C'];

  return (
        <Dropdown data={data} />
        <Button variant='Light' size='medium' label='Light'/>
        <Button variant='Dark' size='medium' label='Dark'/>
        <Button variant='Light' size='small' label='Small'/>
        <Button variant='Light' size='large' label='Large'/>
  )
}
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

👤 **Aman Chhetri**

* Github: [@amanchhetri](https://github.com/amanchhetri)

## Show your support

Give a ⭐️ if this project helped you!

***
