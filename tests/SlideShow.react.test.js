import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SlideShow from '../client/components/SlideShow';
import ImageSelection from '../client/components/ImageSelection';

Enzyme.configure({ adapter: new Adapter() });

describe('SlideShow Component', () => {
  test('SlideShow should change the selectedImageIndex when a thumbnail is clicked', () => {
    const sampleImageUrls = [
      'http://lorempixel.com/600/450/food/',
      'http://lorempixel.com/600/450/sports/'
    ];
    const wrapper = mount(<SlideShow productImages={sampleImageUrls}/>);
    wrapper.find('#thumbnail-1').hostNodes().simulate('click');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(1);
  });
})