import * as React from "react";
import RtfConverter from "@yext/rtf-converter";
const AccordionItem = ({
  
  showDescription,
  ariaExpanded,
  fontWeightBold,
  background,
  itemq,
  itema,
  index,
  onClick,
}) => (<>
<div className="w-[640px] h-[470px] left-12 relative flex flex-col mt-8">
  <div className=" ">
  <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button !px-0 ${fontWeightBold}`}
        onClick={onClick}
        >
          <div
              className="flex items-center justify-between pl-4 py-6 bg-white drop-shadow-[0_0px_1px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-4 pr-12">
                  <span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle cx="6" cy="6" r="6" fill="#141414" fill-opacity="0.5" />
                      </svg>

                  </span>
                  <p>{itemq}</p> 
                  {/* <div dangerouslySetInnerHTML={{__html: RtfConverter.toHTML(itemq)}} className={`faq-tab-label  ${background} `}/> */}
                 
              </div>
              <span className="right-0 mr-8">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.6665 3.33337L13.3332 10L6.6665 16.6667" stroke="#141414" stroke-opacity="0.5"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </span>

          </div>
           </button>
      </div>

      <div className={`bg-[#F1F6FA] w-[648px] h-[472px] rounded-2xl flex  ${showDescription}`}>
          <div className="w-[472px] inline-block right-0 mt-[2.5rem] ml-[9rem] pr-12">
              <p className="text-lg font-semibold">{itemq}</p>
              <p className="pt-10">{itema}</p>
          </div>
      </div>
      </div>
      </>
);

export default AccordionItem;

