/*
In case a component is wrapped in a <StrictMode></StrictMode>
a shallow render like below:
*/

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Search } from 'search/Search';

it('should render successfully', () => {
  const wrapper = shallow(<Search {...props} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

/* Will fail with the following error:
TypeError: Cannot convert a Symbol value to a string

So we need to prepare a named shallow mock for StrictMode while not touching the React itself */

import React from 'react';

jest.mock('react', () => {
  const reactMock = require('React');
  reactMock.StrictMode = function StrictMode() {}; // named shallow mock
  return reactMock;
});

/* The snapshot will contain a StrictMode-wrapped component:

<StrictMode>
  ...
</StrictMode>
*/
