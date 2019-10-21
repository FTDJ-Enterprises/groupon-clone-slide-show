import React from 'react';
import { shallow, mount } from 'enzyme';
import ImageSelection from '../client/components/ImageSelection';
import ThumbnailChevron from '../client/components/ThumbnailChevron';

describe('Image Selection', () => {
  test('It should not display chevrons when there are less than nine imags', () => {
    let productImages = [
      "http://picsum.photos/id/445/650/400#0",
      "http://picsum.photos/id/3/650/400#1",
      "http://picsum.photos/id/225/650/400#2",
      "http://picsum.photos/id/21/650/400#3",
      "http://picsum.photos/id/20/650/400#4",
    ];
    const wrapper = shallow(
      <ImageSelection 
        productImages={productImages}
        selectedImageIndex={0}
        selectImage={() => {}}
      />
    );
    
    expect(wrapper.find(ThumbnailChevron).length).toEqual(0);
  });

  test('It should display chevrons when there are more than nine images', () => {
    let productImages = [
      "http://picsum.photos/id/445/650/400#0",
      "http://picsum.photos/id/3/650/400#1",
      "http://picsum.photos/id/225/650/400#2",
      "http://picsum.photos/id/21/650/400#3",
      "http://picsum.photos/id/20/650/400#4",
      "http://picsum.photos/id/201/650/400#5",
      "http://picsum.photos/id/2/650/400#6",
      "http://picsum.photos/id/180/650/400#7",
      "http://picsum.photos/id/160/650/400#8",
      "http://picsum.photos/id/119/650/400#9",
      "http://picsum.photos/id/445/650/400#10",
      "http://picsum.photos/id/3/650/400#11",
      "http://picsum.photos/id/225/650/400#12",
      "http://picsum.photos/id/21/650/400#13",
      "http://picsum.photos/id/20/650/400#14",
      "http://picsum.photos/id/201/650/400#15",
      "http://picsum.photos/id/2/650/400#16",
      "http://picsum.photos/id/180/650/400#17",
      "http://picsum.photos/id/160/650/400#18",
      "http://picsum.photos/id/119/650/400#19"
    ];
    const wrapper = shallow(
      <ImageSelection 
        productImages={productImages}
        selectedImageIndex={0}
        selectImage={() => {}}
      />
    );
    
    expect(wrapper.find(ThumbnailChevron).length).toEqual(2);
  });

  test('It should properly change the translate prop when a chevron is clicked', () => {
    let productImages = [
      "http://picsum.photos/id/445/650/400#0",
      "http://picsum.photos/id/3/650/400#1",
      "http://picsum.photos/id/225/650/400#2",
      "http://picsum.photos/id/21/650/400#3",
      "http://picsum.photos/id/20/650/400#4",
      "http://picsum.photos/id/201/650/400#5",
      "http://picsum.photos/id/2/650/400#6",
      "http://picsum.photos/id/180/650/400#7",
      "http://picsum.photos/id/160/650/400#8",
      "http://picsum.photos/id/119/650/400#9",
      "http://picsum.photos/id/445/650/400#10",
      "http://picsum.photos/id/3/650/400#11",
      "http://picsum.photos/id/225/650/400#12",
      "http://picsum.photos/id/21/650/400#13",
      "http://picsum.photos/id/20/650/400#14",
      "http://picsum.photos/id/201/650/400#15",
      "http://picsum.photos/id/2/650/400#16",
      "http://picsum.photos/id/180/650/400#17",
      "http://picsum.photos/id/160/650/400#18",
      "http://picsum.photos/id/119/650/400#19"
    ];
    const wrapper = mount(
      <ImageSelection 
        productImages={productImages}
        selectedImageIndex={0}
        selectImage={() => {}}
      />
    );

    wrapper.find(ThumbnailChevron).at(1).simulate('click');
    // console.log(wrapper.find('ImageSelection__ImageContainer').props())
    expect(wrapper.find('ImageSelection__ImageContainer').props().translate).toEqual(-603);
    wrapper.find(ThumbnailChevron).at(0).simulate('click');
    expect(wrapper.find('ImageSelection__ImageContainer').props().translate).toEqual(0);

    // expect(wrapper.find(ThumbnailChevron).length).toEqual(2);
  });


})

