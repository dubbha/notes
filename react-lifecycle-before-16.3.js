/* https://codesandbox.io/s/pj6mk704j7 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    rand: 0,
    mounted: true
  };

  generate = () => this.setState({ rand: Math.random() });

  unmount = () => this.setState({ mounted: false });

  render() {
    return (
      <div style={{ border: '1px solid green', margin: '10px', padding: '10px' }}>
        <button onClick={this.generate}>Pass props down to child</button>
        <button onClick={this.unmount}>Unmount child</button>
        {this.state.mounted && <Comp init={1} rand={this.state.rand} />}
      </div>
    );
  }
}

class Comp extends React.Component {
  static propTypes = {
    init: PropTypes.number
  };
  static defaultProps = {
    init: 3
  };

  constructor(props) {
    console.log('constructor');

    super(props);

    this.state = {
      var: this.props.init
    };
  }

  increase = () => {
    this.setState({
      var: this.state.var + 1
    });
  };

  componentWillMount() {
    // UNSAFE_componentWillMount
    console.log('componentWillMount');
  }

  componentWillUpdate(nextProps, nextState) {
    // UNSAFE_componentWillUpdate
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentWillReceiveProps(nextProps) {
    // UNSAFE_componentWillReceiveProps
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props, this.state);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // The two new lifecycles below are introduced in 16.3 and if uncommented
  // would conflict with the now unsafe legacy lifecycles:
  // componentWillMount, componentWillUpdate, componentWillReceiveProps
  //
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps', nextProps, prevState);
  //   return null;
  // }
  //
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate', prevProps, prevState);
  //   return null;
  // }

  render() {
    console.log('render');
    return (
      <div
        style={{ border: '1px solid green', margin: '10px', padding: '10px' }}
      >
        <div>
          var is {this.state.var} [rand: {this.props.rand.toFixed(2)}]
        </div>
        <button onClick={this.increase}>update child local state</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
