import React from 'react';
import MainPicture from '../client/MainPicture';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });

describe('MainPicture Component', () => {
  test('MainPicture zooms and pans according to the location of the mouseover', () => {
    const wrapper = shallow(<MainPicture pictureUrl="https://via.placeholder.com/650x400" />);
  
    expect(wrapper.find('.main-picture').props().scale).toEqual(1);
    expect(wrapper.find('.main-picture').props().transformOrigin).toEqual('50% 50%');
  
    wrapper.simulate('mousemove', {
      pageX: 130,
      pageY: 80,
      target: {
        offsetLeft: 0,
        offsetTop: 0,
        offsetWidth: 650,
        offsetHeight: 400,
      },
    });
    expect(wrapper.find('.main-picture').props().scale).toEqual(1.5);
    expect(wrapper.find('.main-picture').props().transformOrigin).toEqual('20% 20%');
  
    wrapper.simulate('mouseleave')
    expect(wrapper.find('.main-picture').props().scale).toEqual(1);
    expect(wrapper.find('.main-picture').props().transformOrigin).toEqual('50% 50%');
  });
})