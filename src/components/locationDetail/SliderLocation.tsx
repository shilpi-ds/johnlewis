import React from "react";
import { render } from "react-dom";
import CarouselSlider from "react-carousel-slider";

const SliderLocation = (props: any) => {
  const { photoGallery } = props;  
  console.log(photoGallery);
  let sliderBoxStyle = {
    height: "250px"
    //, width: "200px"
    // , background: "tranparent"
  };
  
  let itemsStyle = {
    // ,height: "100%", padding: "0px"
    // , padding: "15px"
    // , background: "#FFCA28"
    // , borderRadius: "4px"
    // , margin: "0px 0px", padding: "0px"
  };
  
  let textBoxStyle = {
    // textAlign: "left"
    // ,width:"50%"
    // , background: "transparent"
    // , fontSize: "36px"
    // , fontWeight: 300
  };
  
  let buttonSetting = {
    // placeOn: "middle-inside"
    // ,hoverEvent: true,
    // , style: {
    //   left: {
    //     margin: "0px 0px 0px 10px"
    //   },
    //   right: {
    //     margin: "0px 10px 0px 0px"
    //   }
    // }
  };
  
  let manner = {
    // autoSliding: {interval: "4s"}
    //, duration: "0.3s"
  };
  const photos = photoGallery.map((element:any) => (     
	<SplideSlide>
    <img src={element.image.url} height={400} width={500} alt=""/>
    <p>{element.description}</p>
    <p>{element.details}</p>
	</SplideSlide>    
  ));
  return (
   
     
	 
  );
};

export default SliderLocation;

