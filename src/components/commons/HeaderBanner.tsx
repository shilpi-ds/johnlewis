import * as React from "react";
import Cta from "./cta";


type Banner = {
  title?: string;
  description?: string;
himage?:any;
burl?:any;
blabel?:any;
  
};



const HeaderBanner = (props: Banner) => {
  const { title, description ,himage,burl,blabel} = props;
  

  return (
    <>
<div className="relative">
<img src={himage} alt=""/>
<div className="absolute top-0 text-center mt-20 ml-44">
    <h1 className="text-white text-5xl pb-7">{title}</h1>
    <span className="text-white text-xl">{description}</span>
    <button className="block text-black font-bold py-3 px-10 bg-white mt-7 m-auto"><a href={burl}>{blabel}</a></button>
</div>           
</div>
    </>
  );
};

export default HeaderBanner;

