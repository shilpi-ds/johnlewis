import * as React from "react";
import { useState } from 'react';
import $ from "jquery";

const Accordion = ({ content,title }) => {
  //console.log(title);
  //const [toggle, setToggle] = useState(!null);

  const [section, setSection] = useState(0);
  const [isActive, setIsActive] = useState('section-chat');

  const handleClick = (e:any) => {
    setSection(e.target.id);
  };

//console.log(content);
  return (
    <>
    <div className="faq's mt-[30px] flex justify-center mb-[3.75rem]">
     <div className=" w-[640px] h-[470px] relative left-12">
            <h2 className="text-[#141414] text-[40px] relative top-[0.625rem">{title}</h2>
            <div className="absolute w-[640px] flex flex-col justify-center mt-[2rem] top-2/4 -translate-y-2/4"> 
   { content.map((item:any,index:any) => {
      return(
      <>


        <div id={index} className={`flex items-center justify-between pl-4 py-6 drop-shadow-[0_0px_1px_rgba(0,0,0,0.15)] bg-white ${section==index?isActive:''}`} onClick={(e) => {handleClick(e)}} style={{ cursor: "pointer" }}>
         <div  className="flex items-center gap-[16px]" >
          {/* <div className="faq-head flex items-center gap-4 pr-12" onClick={showAnswer(index)} style={{ cursor: "pointer" }}> */}
            <span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="#141414" fill-opacity="0.5" />
              </svg>

            </span>
            <p id={index}>{item.question}</p>
          </div>
          <span className="right-0 mr-8">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.6665 3.33337L13.3332 10L6.6665 16.6667" stroke="#141414" stroke-opacity="0.5"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>

        </div>

     

      </>
      )

       })}
       </div></div>
 
   {/* {content.map((i) => ( */}
          <div className="bg-[#F1F6FA] w-[648px] h-[472px] rounded-2xl flex mt-[2rem]">
            <div className="w-[472px] inline-block right-0 mt-[2.5rem] ml-[9rem]">
              {/* <p className="text-lg font-semibold">Do I need to pay to Instapay even when there is no transaction going on in my business?</p> */}
              <p className="pt-10">{content[section].answer}</p>
            </div></div>
            {/* ))} */}
           </div>
</>
  );
};

export default Accordion;

