import * as React from "react";
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
                   <img src={footer5img.url}/> 
                    <p className="text-white pl-5"><a href="">{footer5cta.label}</a></p>
                </div>
            
            <div className="socialmedia flex gap-8 right-0">
                <ul className="socialfoot">
            {social?.map((sociallink: any) => {
                    return (
                      <>
                             <li><a href={sociallink.socialLink}><img src={sociallink.socialImage.url} width="24" height="24"/></a></li>
                      </>
                    );
                })} 
            </ul>
                {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                        fill="white" />
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.27998 9.09 5.10998 7.38 2.99998 4.79C2.62998 5.42 2.41998 6.16 2.41998 6.94C2.41998 8.43 3.16998 9.75 4.32998 10.5C3.61998 10.5 2.95998 10.3 2.37998 10V10.03C2.37998 12.11 3.85998 13.85 5.81998 14.24C5.19071 14.4122 4.53007 14.4362 3.88998 14.31C4.16158 15.1625 4.69351 15.9084 5.41099 16.4429C6.12847 16.9775 6.99543 17.2737 7.88998 17.29C6.37361 18.4904 4.49397 19.1393 2.55998 19.13C2.21998 19.13 1.87998 19.11 1.53998 19.07C3.43998 20.29 5.69998 21 8.11998 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                        fill="white" />
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                        fill="white" />
                </svg>

                <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_144)">
                        <path
                            d="M9.5625 0.304688C4.75313 0.304688 0 3.51094 0 8.7C0 12 1.85625 13.875 2.98125 13.875C3.44531 13.875 3.7125 12.5813 3.7125 12.2156C3.7125 11.7797 2.60156 10.8516 2.60156 9.0375C2.60156 5.26875 5.47031 2.59688 9.18281 2.59688C12.375 2.59688 14.7375 4.41094 14.7375 7.74375C14.7375 10.2328 13.7391 14.9016 10.5047 14.9016C9.3375 14.9016 8.33906 14.0578 8.33906 12.8484C8.33906 11.0766 9.57656 9.36094 9.57656 7.53281C9.57656 4.42969 5.175 4.99219 5.175 8.74219C5.175 9.52969 5.27344 10.4016 5.625 11.1188C4.97813 13.9031 3.65625 18.0516 3.65625 20.9203C3.65625 21.8063 3.78281 22.6781 3.86719 23.5641C4.02656 23.7422 3.94688 23.7234 4.19063 23.6344C6.55313 20.4 6.46875 19.7672 7.5375 15.5344C8.11406 16.6313 9.60469 17.2219 10.7859 17.2219C15.7641 17.2219 18 12.3703 18 7.99688C18 3.34219 13.9781 0.304688 9.5625 0.304688Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_144">
                            <rect width="18" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                        fill="white" />
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <path
                        d="M16.6 5.82C15.9164 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4262 16.071 12.1429 16.7066 11.6598 17.1729C11.1767 17.6393 10.5315 17.8999 9.86 17.9C8.44 17.9 7.26 16.74 7.26 15.3C7.26 13.58 8.92 12.29 10.63 12.82V9.66C7.18 9.2 4.16 11.88 4.16 15.3C4.16 18.63 6.92 21 9.85 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2974 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                        fill="#102B2B" />
                </svg> */}

            </div>
        </div>
        </div>
               
                  
         



</footer>
      </>
   );
};

export default Footer;
