# Inducer

[![Build Status](https://travis-ci.org/tanhauhau/inducer.svg?branch=master)](https://travis-ci.org/tanhauhau/inducer)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tanhauhau/inducer/blob/master/LICENSE)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## Inject Redux Reducer in a HOC way!

### Install

```bash
$ yarn add inducer
```

### Show me how!

```js
// YourComponent.js
import gameReducer from './gameReducer';
import injectReducer from 'inducer';

class YourComponent extends React.Component {
  // component logic here
}
export default injectReducer({
  game: gameReducer
})(YourComponent);
```

```js
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import YourComponent from './YourComponent.js'

export default function App({ store }) {
  return (
    <Provider store={store}>
    <!-- this is important as the HOC will get the store 
      from the context provided by the store provider -->
      <YourComponent />
    </Provider>
  )
}
```