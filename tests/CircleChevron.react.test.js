import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CircleChevron from '../client/components/CircleChevron';

Enzyme.configure({ adapter: new Adapter() });

describe('CircleChevron Component', () => {
  test('It\'s hover state changes on hover', () => {

    const wrapper = shallow(<CircleChevron direction="left" handleClick={() => {}} length={40}/>);

    expect(wrapper.find('.circle').props().hover).toBeFalsy();
    wrapper.find('.g').simulate('mousemove');
    expect(wrapper.find('.circle').props().hover).toBeTruthy();
    wrapper.find('.g').simulate('mouseleave');
    expect(wrapper.find('.circle').props().hover).toBeFalsy();
  });

  test('It invokes handleClick when the G element is clicked', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<CircleChevron direction="left" handleClick={mockFunction} length={40}/>);

    wrapper.find('.g').simulate('click');
    expect(mockFunction).toBeCalled();
  })
})