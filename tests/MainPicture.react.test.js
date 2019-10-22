import React from 'react';
import { shallow, mount } from 'enzyme';
import MainPicture from '../client/components/MainPicture';
import CircleChevron from '../client/components/CircleChevron';

beforeEach(() => {
  Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
          width: 650,
          height: 400,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
      }
  });
});

describe('MainPicture Component', () => {
  test('MainPicture zooms and pans according to the location of the mouseover', () => {
    const wrapper = mount(
      <MainPicture
        pictureUrl="https://via.placeholder.com/650x400"
        increaseSelectedImage={() => {}}
        decreaseSelectedImage={() => {}}
      />
    );
  
    expect(wrapper.find('MainPicture__Img').props().scale).toEqual(1);
    expect(wrapper.find('MainPicture__Img').props().transformOrigin).toEqual('50% 50%');
  
    wrapper.find('MainPicture__Mask').simulate('mousemove', {
      pageX: 130,
      pageY: 80,
      target: {
        offsetLeft: 0,
        offsetTop: 0,
        offsetWidth: 650,
        offsetHeight: 400,
      }
    });
    expect(wrapper.find('MainPicture__Img').props().scale).toEqual(1.5);
    expect(wrapper.find('MainPicture__Img').props().transformOrigin).toEqual('20% 20%');
  
    wrapper.find('MainPicture__Mask').simulate('mouseleave');
    expect(wrapper.find('MainPicture__Img').props().scale).toEqual(1);
    expect(wrapper.find('MainPicture__Img').props().transformOrigin).toEqual('50% 50%');
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