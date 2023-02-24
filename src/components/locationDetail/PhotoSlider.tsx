import * as React from "react";
import { useEffect, useState} from 'react';
import { Splide, SplideSlide,SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import $ from "jquery";
const PhotoSlider = (props: any) => {
  
  const { photoGallery } = props;  
 // console.log(photoGallery);
 
  const photos = photoGallery.map((element:any,index) => (     
	<SplideSlide>
    <div className="why-slider"><img className='h-[360px] w-[360px] object-cover' src={element.image.url} alt=""/></div>
    <div className="sli-con text-center mt-[22px]"><p>{element.description}</p>
    <p>{element.details}</p></div>
	</SplideSlide>    
  ));
  return (
    <>
     
	  <Splide aria-label="Photo Slider" options={{
      rewind: false,
      width : '100%',
      start:0,
     // gap:80,
      type: "loop",
      perPage: 5,
      perMove : 1,
      focus  : 0,
      //padding: { left: 10, right: 20 },
      //margin: { left: 80,right:80 },
      pagination:false,
      cloneStatus:true,
      //arrows:true
    }}>
      
          {photos}
      </Splide>
    
    </>
  );
};

export default PhotoSlider;

