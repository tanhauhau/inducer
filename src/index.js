import React from 'react';
import PropTypes from 'prop-types';
import { injectReducer, removeReducer } from './utils';

const InjectReducer = reducer => WrappedComponent => {
  class InjectReducer extends React.Component {
    componentWillMount() {
      injectReducer(this.context.store, reducer);
    }
    componentWillUnmount() {
      removeReducer(this.context.store, reducer);
    }
    render() {
      return React.createElement(WrappedComponent, this.props);
    }
  }
  InjectReducer.contextTypes = {
    store: PropTypes.shape({
      replaceReducer: PropTypes.func.isRequired,
    }),
  };
  return InjectReducer;
};
export default InjectReducer;
