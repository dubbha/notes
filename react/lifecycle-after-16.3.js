/* https://codesandbox.io/s/1v44qzzj7l */

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
      <div
        style={{ border: '1px solid green', margin: '10px', padding: '10px' }}
      >
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

  // Since 16.3 the three lifecycles below are considered unsafe
  // and are to be deprecated.
  //
  // componentWillMount() { // UNSAFE_componentWillMount
  //   console.log('componentWillMount');
  // }

  // componentWillUpdate(nextProps, nextState) { // UNSAFE_componentWillUpdate
  //   console.log('componentWillUpdate', nextProps, nextState);
  // }

  // componentWillReceiveProps(nextProps) { // UNSAFE_componentWillReceiveProps
  //   console.log('componentWillReceiveProps', nextProps);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  // Introduced in 16.3 (static!)
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', nextProps, prevState);
    return null;
  }

  // Introduced in 16.3
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    return { snap: 'shot' };  // return null;
  }

  // Snapshot generated by getSnapshotBeforeUpdate() is then
  // passed to componentDidUpdate() as the third parameter
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

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