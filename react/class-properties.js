/*
https://codesandbox.io/s/qz74mjjx6
https://michalzalecki.com/react-components-and-class-properties/
 - initializing state as a class property, not inside a constructor
 - auto-bound handler methods using class property and arrow function
 - static fields used for propTypes and defaultProps
*/
import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const App = () => (
  <div>
    <Comp init={1} />    {/* Don't worry the state is not static, not shared between instances */}
    <Comp init={3} />    {/* So counters are increased independently */}
    <Comp />
  </div>
);

class Comp extends React.Component {
  static propTypes = {      // We are used to setting propTypes outside of the class.
    init: PropTypes.number  // It often makes you scroll to the very bottom
  }                         // of the file to learn about props which component expects.
                            // Defining props as static fields allows you to keep them
  static defaultProps = {   // inside of the class and benefit from a common convention
    init: 5                 // of keeping statics at the top of the class.
  }

  state = {                // Initializing state inside of the constructor comes with an
    var: this.props.init   // overhead of calling super and remembering about props.
  };                       // We can initialize state directly as a class property.
                           // Due to the fact that the state is defined on the instance,
                           // we still have access to this during state initialization.

  increase = () => {           // We can benefit from the fact that arrow function
    this.setState({            // preserves context in which was defined
      var: this.state.var + 1  // and set handler directly as a class property
    });
  };

  render() {
    return (
      <div>
        <h3>var is {this.state.var}</h3>
        <button onClick={this.increase}>increase me</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
