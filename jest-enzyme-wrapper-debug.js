/* http://airbnb.io/enzyme/docs/api/ShallowWrapper/debug.html

Returns an HTML-like string of the wrapper for debugging purposes
Useful to print out to the console when tests are not passing when you expect them to. */

const wrapper = shallow(<Book title="Huckleberry Finn" />);
console.log(wrapper.debug());
