import React from 'react';
import { mount } from 'enzyme';
import SlideShow from '../client/components/SlideShow';
import ImageSelection from '../client/components/ImageSelection';
import MainPicture from '../client/components/MainPicture';
import CircleChevron from '../client/components/CircleChevron';

let wrapper;

beforeEach(() => {
  const sampleImageUrls = [
    'http://lorempixel.com/600/450/food/',
    'http://lorempixel.com/600/450/sports/'
  ];
  wrapper = mount(<SlideShow productImages={sampleImageUrls}/>);
});

afterEach(() => {
  wrapper.unmount();
})

describe('SlideShow Component', () => {
  test('SlideShow should change the selectedImageIndex when a thumbnail is clicked', () => {
    wrapper.find('#thumbnail-1').hostNodes().simulate('click');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(1);
  });

  test('It increments the selectedImageIndex when the right chevron is clicked', () => {
    wrapper.find(MainPicture).simulate('mouseenter');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(0);
    wrapper.find(CircleChevron).at(1).find('.g').hostNodes().simulate('click');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(1);
  });

  test('It sets the selectedImageIndex to 0 when the right chevron is clicked more times than images', () => {
    wrapper.find(MainPicture).simulate('mouseenter');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(0);
    wrapper.find(CircleChevron).at(1).find('.g').hostNodes().simulate('click');
    wrapper.find(CircleChevron).at(1).find('.g').hostNodes().simulate('click');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(0);
  });

  test('It sets the selectedImageIndex to be the last image when the left chevron is clicked at 0', () => {
    wrapper.find(MainPicture).simulate('mouseenter');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(0);
    wrapper.find(CircleChevron).at(0).find('.g').hostNodes().simulate('click');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(1);
  });

  test('It decreases the selectedImageIndex when the left chevron is clicked', () => {
    wrapper.find(MainPicture).simulate('mouseenter');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(0);
    wrapper.find(CircleChevron).at(0).find('.g').hostNodes().simulate('click');
    wrapper.find(CircleChevron).at(0).find('.g').hostNodes().simulate('click');
    expect(wrapper.find(ImageSelection).prop('selectedImageIndex')).toEqual(0);
  });
});