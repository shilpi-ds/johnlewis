import * as React from "react";
import CookieConsent from "react-cookie-consent";
//import emailfoot from "../../images/email-foot.png";
//import phonefoot from "../../images/phone-foot.png";
var currentTime = new Date()
var year = currentTime.getFullYear()

type props = {
  footer1?:any;
  footer1title?:any;
  footer1description?:any;
  footer2?:any;
  footer3title?:any;
  footer3cta?:any;
  footer3barcta?:any;
  footer3barimg?:any;
  footer4links?:any;
  footer4title?:any;
  footer4Description?:any;
  footer5img?:any;
  footer5cta?:any;
  social?:any;
  };
  

  const Footer = (props: any) => {
   const {footer1,footer1title,footer1description,footer2,footer3title,footer3cta,footer3barcta,footer3barimg,footer4links,footer4title,footer4Description,footer5img,footer5cta,social} = props;
console.log(props);
   return (
      <>
      
      <footer>
        <div className="bg-[#102B2B] border-t-8 border-[#099E3D]">
            <div className="text-white text-center py-10">
                <span>{footer1title}</span>
                <h5>{footer1description}</h5>
                <button className="block text-black font-bold py-3 px-10 bg-white mt-7 m-auto">{footer1.label}</button>
            </div>
        </div>
        <div className="bg-[#102B2B] border-y ">
            <div className="container max-w-[75rem] mx-auto pt-10 pb-24 flex gap-24">
                
                {footer2?.map((e: any) => {
                    return (
                      <><ul className="font-semibold text-white">
                     <li className="text-[13px] font-normal pb-8">{e.linkTitle}</li>
                      {e.linkUrl?.map((link: any) => {
                    return (
                      <>
                      {link.label && link.link &&
                    <li className="pb-8"><a href={link.link}>{link.label}</a></li>
                      }
                      </>
                    );
                  })}  
                    </ul>  </>
                    );
                  })} 
                    
                
</div></div>
<div className="bg-[#102B2B]">
            <div className="container max-w-[75rem] mx-auto flex">
                <div className="pt-7 pb-7 text-white w-1/2 border-r border-white">
                    <p className="font-semibold ">{footer3title}</p>
                    <button className="border border-white px-6 py-3 mt-4">{footer3cta.label}</button>
                </div>

                <div className="pt-7 pb-7 text-white w-1/2">
                    <img className="h-20 ml-12 inline-block" src={footer3barimg.url} alt=""/>
                    <span className="ml-4"><a href="">{footer3barcta.label}</a></span>
                </div>
            </div>

        </div>
<div className="bg-[#102B2B] border-y p-4">
            <div className="container max-w-[75rem] mx-auto">
                <ul className="text-white flex gap-2 pt-2">
                {footer4links?.map((link: any) => {
                    return (
                      <>
                        {link.label && link.link &&
                    <li><a href={link.link}>{link.label}</a></li>
                        }
                      </>
                    );
                  })}  
                    
                </ul>
                <p className="text-white font-medium py-4 text-sm">{footer4Description}</p>
                <p className="text-white">{footer4title}</p>
            </div>
        </div>

        <div className="bg-[#102B2B]">
            <div className="flex  justify-between container max-w-[75rem] mx-auto py-7">
                <div className="flex">
                   <img src={footer5img.url} alt=""/> 
                    <p className="text-white pl-5"><a href="">{footer5cta.label}</a></p>
                </div>
            
            <div className="socialmedia flex gap-8 right-0">
                <ul className="socialfoot">
            {social?.map((sociallink: any) => {
                    return (
                      <>
                             <li><a href={sociallink.socialLink}><img src={sociallink.socialImage.url} width="24" height="24" alt=""/></a></li>
                      </>
                    );
                })} 
            </ul>
               

            </div>
        </div>
        <CookieConsent

                    buttonText={" Allow All"}
                    buttonStyle={{
                        marginLeft: "100px",
                        backgroundColor: '#5c8018',
                        color: "black"

                    }}

                >
                    <p>We use cookies, which are small text files, to improve your experience on our website and to show you personalised content. You can allow all or manage them individually.
                    </p>
                    <a className="text-[#5c8018]" href="#">
                        View All
                    </a>
                    .
                    {/* <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-[#EC6225] text-white font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                        Manage Cookies
                    </button> */}
                </CookieConsent>
        </div>
               
                  
         



</footer>
      </>
   );
};

export default Footer;
