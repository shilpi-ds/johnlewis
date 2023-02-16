import * as React from "react";
//import gallerybg from "../../images/bg-service.jpg"

const PhotoGallery = (props?: any) => {
console.log(props);
   const photos = props.gallery.map((element:any) => {
    const {height=30,url, width=30,title}=element;
    return (<div className="rounded-tl-[20px] rounded-tr-[70px] rounded-br-[20px] rounded-bl-[70px] max-w-[18.813rem] bg-white shadow-md p-3">
      <a href=""><img className="rounded-tl-[20px] rounded-tr-[70px] rounded-br-[20px] rounded-bl-[70px]" src={url} alt=""/></a></div>
    )
});


  return (
    <>
    
    <div className="mb-[60px] text-[40px]">
    <p className="text-center">{props.title}</p>
    <div className="flex flex-wrap max-w-[1320px] m-auto gap-[2.313rem] gap-y-[4.375rem] mt-10 items-center">
         
    {photos}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;

