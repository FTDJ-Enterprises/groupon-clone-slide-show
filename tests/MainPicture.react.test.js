import React from 'react';
import { shallow } from 'enzyme';
import MainPicture from '../client/components/MainPicture';
import CircleChevron from '../client/components/CircleChevron';

describe('MainPicture Component', () => {
  test('MainPicture zooms and pans according to the location of the mouseover', () => {
    const wrapper = shallow(
      <MainPicture
        pictureUrl="https://via.placeholder.com/650x400"
        increaseSelectedImage={() => {}}
        decreaseSelectedImage={() => {}}
      />
    );
  
    expect(wrapper.find('.main-picture').props().scale).toEqual(1);
    expect(wrapper.find('.main-picture').props().transformOrigin).toEqual('50% 50%');
  
    wrapper.find('.mask').simulate('mousemove', {
      pageX: 130,
      pageY: 80,
      target: {
        offsetLeft: 0,
        offsetTop: 0,
        offsetWidth: 650,
        offsetHeight: 400,
      }
    });
    expect(wrapper.find('.main-picture').props().scale).toEqual(1.5);
    expect(wrapper.find('.main-picture').props().transformOrigin).toEqual('20% 20%');
  
    wrapper.find('.mask').simulate('mouseleave');
    expect(wrapper.find('.main-picture').props().scale).toEqual(1);
    expect(wrapper.find('.main-picture').props().transformOrigin).toEqual('50% 50%');
  });

  test('It displays the circleChevrons on hover', () => {
    const wrapper = shallow(
      <MainPicture
        pictureUrl="https://via.placeholder.com/650x400"
        increaseSelectedImage={() => {}}
        decreaseSelectedImage={() => {}}
      />
    );
    
    expect(wrapper.find(CircleChevron).length).toEqual(0);
    wrapper.simulate('mouseenter');
    wrapper.update();
    expect(wrapper.find(CircleChevron).length).toEqual(2);
  });
});