import * as React from "react";

type props = {
 logo: any;
  links: any;
  topmenu?:any;
};

const Header = (props: any) => {
  const {logo, links ,topmenu,free} = props;
  return (
    <header>
        <div className="bg-[#102B2B] text-white text-sm flex justify-between items-center border-b-8 border-[#099E3D]">
            <ul className="flex ml-4 py-2 gap-3 ">
            {topmenu?.map((top: any) => {
                    return (
                      <>
                      {top.link && top.label &&
                <li><a href={top.link} className="">
                            {top.label}
                          </a></li>
            }
                </>
                    );
                  })}
            </ul>
            {free.link &&
            <div className="flex mr-24 gap-3">
                <span><a href={free.link}>{free.label}</a></span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 6.5L2 7.77002L12 17.77L22 7.77002L20.5 6.5L12 15L3.5 6.5Z" fill="white" />
                </svg>

            </div>
}
        </div>
       
        <div>
            <div className="container max-w-[75rem] mx-auto py-7">
            <a href="#" className="">
                    <img
                      src={logo.image.url} 
                      alt="John Lewis Logo"
                      title="John Lewis" className="h-8"
                    />
                  </a>
                
            </div>
        </div>

        <div className=" border-b">
            <div className="container max-w-[75rem] mx-auto py-4 font-medium">
                <ul className="headermenus flex ml-4 py-2 gap-7 ">
                {links?.map((e: any) => {
                    return (
                      <>
                      {e.link && e.label &&
                    <li><a href={e.link} className="">
                            {e.label}
                          </a></li>
                }
                    
                    </>
                    );
                  })}
                  {/* <span className="text-[#DB003E] font-bold ">
                        <li>Sale & Offers</li>
                    </span> */}
                </ul>
            </div>
        </div>

   

    </header>
  );
};
export default Header;

