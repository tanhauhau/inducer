# Inducer

[![Build Status](https://travis-ci.org/tanhauhau/inducer.svg?branch=master)](https://travis-ci.org/tanhauhau/inducer)
[![Dependency status](https://david-dm.org/tanhauhau/inducer.svg)](https://david-dm.org)

## Inject Redux Reducer in a HOC way

### Show me how!

```js
import gameReducer from './gameReducer';
import injectReducer from 'inducer';

class YourComponent extends React.Component {
  // component logic here
}
export default injectReducer({
  game: gameReducer
})(YourComponent);
```
