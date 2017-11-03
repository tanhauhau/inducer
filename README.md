# Inducer

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
