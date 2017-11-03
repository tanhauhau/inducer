const asyncReducers = {};
const reducerCounters = {};

export function injectReducer(store, reducer) {
  Object.keys(reducer).forEach(key => {
    reducerCounters[key] = (reducerCounters[key] || 0) + 1;
    asyncReducers[key] = reducer[key];
  });
  store.replaceReducer(asyncReducers);
}

export function removeReducer(store, reducer) {
  Object.keys(reducer).forEach(key => {
    if (key in reducerCounters) {
      if (--reducerCounters[key] === 0) {
        delete reducerCounters[key];
        delete asyncReducers[key];
      }
    }
  });
  store.replaceReducer(asyncReducers);
}
