import { mount } from 'enzyme';
import Component from './Component';

const props = { func:  jest.fn() }

describe('Component', () => {
    it('should call func prop on componentWillUnmount', () => {
        const wrapper = mount(<Component {...props} />);
        wrapper.unmount();
    
        expect(props.func).toBeCalled();
    });    
})
