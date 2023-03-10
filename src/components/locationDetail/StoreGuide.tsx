import * as React from "react";
import store from "../../images/store-guide.png";
import { useState } from 'react';
import { Link } from "@yext/pages/components";
import $ from "jquery";

const StoreGuide = (props: any) => {
  const { guide } = props;  
 // console.log(props);
 
  const [section, setSection] = useState(0);
    

  return (
    <>
   <div className="1 store_guide relative flex items-center mt-[60px] mb-[60px]">
        <img className="store_guide_image w-[100%] h-[670px]" src={store} alt=""/>
        <div className="2 absolute top-0 bottom-0 flex justify-between w-[100%]">
            <div className="3 flex flex-col items-center ml-[20.563rem]">
                <div className="Store_guid pt-[66px]">
                    <p className="text-[22px] font-medium">{props.title}</p>
                </div>
                
                <div className="Flores flex flex-col">
                {props.detail?.map((i,ind) => (
        <button
        className="w-[320px] h-[80px] bg-[#E5EFF6] border-4 border-white py-5 px-11 text-xl mt-[50px] rounded-tl-[20px] rounded-tr-[70px] rounded-br-[20px] rounded-bl-[70px] shadow-md p-3" onClick={()=>setSection(ind)}>
        {i.levelName}
        </button>
      ))}
                        </div>
            </div>

            <div className="content_bg absolute w-[510px] h-[644px] bg-white right-0 bottom-0 rounded-t-full mr-[20.5rem]">
                <div
                    className="content text-center mt-[4.125rem] relative after:absolute after:bg-white after:opacity-95 after:bottom-0 after:top- after:h-14 after:left-9 after:right-0 after:content-[''] after:z-50 after:w-[17.188rem] after:border-b border-[#D9D9D9] after:m-auto after:mr-[7.063rem]">
                    <ul className="">
                        <li className="text-xl font-bold  pb-5">Departments</li>
                        
                        {props.detail[section]?.listOfDepartments?.map((i) => (
        <li className="pb-1">{i}</li>
      ))}
            
                    </ul>
    
                    <ul className="mt-5">
                        <li className="text-xl font-bold  pb-5">Services</li>
                        <li className="pb-1">Dry Cleaning Service</li>
                        {props.detail[section].listOfServices.map((i) => (
        <li className="pb-1">{i}</li>
      ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default StoreGuide;

