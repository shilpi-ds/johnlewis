import * as React from "react";
import store from "../../images/store-guide.png";
import { useState } from 'react';
import { Link } from "@yext/pages/components";

const StoreGuide = (props: any) => {
  const { guide } = props;  
 // console.log(props);
  const [toggle, setToggle] = useState(null);

  let handleToggle=(id)=>{
    if(toggle===id){
        setToggle(null);
        return false
    }
   setToggle(id)
   
}
  return (
    <>
   <div className="store_guide relative flex items-center mb-[60px]">
        <img className="store_guide_image w-[100%] h-[670px]" src={store} alt=""/>
        <div className=" absolute top-0 ml-[20.563rem] mt-[4.125rem] text-center">
            <p className="text-[22px] font-medium ">{props.title}</p>
            <div className=" flex flex-col gap-3">
            {props.detail?.map((level: any,index) => {
                    return (
                      <>
                       <div className="guide-card" key={index}>
                       <div className="guide-card-header" onClick={()=>handleToggle(index)}>
                      <button 
                    className="w-[320px] h-[80px] bg-[#E5EFF6] border-4 border-white py-5 px-11 text-xl mt-[50px] rounded-tl-[20px] rounded-tr-[70px] rounded-br-[20px] rounded-bl-[70px] shadow-md p-3">
                    {level.levelName}
                </button> <br/>
                </div>
                {(index===toggle) && 
              
        <div className="guide-body absolute w-[510px] h-[644px] bg-white mr-[20.5rem] bottom-0 right-0 rounded-t-full">
            <div className="text-center mt-[6.563rem]">
       
                <ul className="">
                
                    <li className="font-bold pb-9">{level.department}</li>
                    {level.listOfDepartments?.map((list: any) => {
                      console.log(list)
                    return (
                      <>
                    <li className="pb-4">{list}</li>
                    </>
                    );
                  })}
                  <li className="font-bold pb-9">{level.services}</li>
                  {level.listOfServices?.map((listser: any) => {
                    return (
                      <>
                    <li className="pb-4">{listser}</li>
                    </>
                    );
                  })}
                    
                </ul>
                
            </div>
        </div>
            }
        </div>
        </>
                    );
                  })}
                
            </div>
        </div>
    </div>
	
    </>
  );
};

export default StoreGuide;

