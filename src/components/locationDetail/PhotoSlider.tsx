import * as React from "react";
import { useEffect, useState} from 'react';
import { Splide, SplideSlide,SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import $ from "jquery";
const PhotoSlider = (props: any) => {
  
  const { photoGallery } = props;  
 console.log(photoGallery);
 
  const photos = photoGallery.map((element:any,index) => (  
      
	<SplideSlide>
    <div className="why-slider"><img className='h-[360px] w-[360px] object-cover' src={element.image.url} alt=""/></div>
    <div className="sli-con text-center mt-[22px]"><a href={element.clickthroughUrl}><p>{element.description}</p></a>
    <p>{element.details}</p></div>
	</SplideSlide> 
    
  ));
  return (
    <>
     
     <Splide hasTrack={ false } options={ {
      rewind: false,
      width : '100%',
      gap   : '80',
      type: "loop",
      perPage:5,
      perMove: 1,
      arrows:  true,
      drag:true,
      focus:0,
      pagination:false,
  } }
      
      aria-label="My Favorite Images"
    >

<SplideTrack>
     {photos}
    </SplideTrack>
    <div className="splide__arrows">
    <button className="splide__arrow splide__arrow--prev"></button>
    <button className="splide__arrow splide__arrow--next"></button>
  </div>
    </Splide>

    
    </>
  );
};

export default PhotoSlider;

