import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './app'; 
Enzyme.configure({ adapter: new Adapter() })

const { shallow } = Enzyme

it('renders with App', () => {
  const wrapper = shallow(<App />);  
  console.log(wrapper.find('li').length)                       
  expect(wrapper.find('li').length).toBe(2);                 
  // expect(wrapper.find('Result').prop('type')).toBe('success');  
});