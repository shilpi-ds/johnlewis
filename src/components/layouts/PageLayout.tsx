import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import HeaderBanner from "../commons/HeaderBanner";
import Nav from "./Nav";
import { StaticData } from "../../../sites-global/staticData";
import Home from  "../../images/home-john.png";

type Props = {
    title?: string;
    gdata?: any;
   // global:any;
    children?: React.ReactNode;
};
 
  const PageLayout = ({
    title,
    gdata,
    //global,
    children,
  }: Props) => { console.log(gdata);
    return (
        <>
        
      <Header logo={gdata.c_johnLogo} links={gdata.c_headerMenus} topmenu={gdata.c_headerTopMenus}/>
     
      <div className="flex items-center gap-3 text-sm font-medium">
      <a href="#" className="home"><img className="h-9 pl-9 my-3" src={Home} alt=""/></a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.83337 17.5L12.4167 2.5H14.1667L7.58337 17.5H5.83337Z" fill="#141414" />
            </svg>
            <span>{StaticData.locator_breadcrumb}</span>
        </div>


      <HeaderBanner title={gdata.c_bannerTitle} description={gdata.c_bannerDescription} himage={gdata.c_bannerImage.image.url} blabel={gdata.c_bannerUrl.label} burl={gdata.c_bannerUrl.link}/>
                {children}
      <Footer footer1={gdata.c_footer1Cta} footer1title={gdata.c_footer1Title} footer1description={gdata.c_footer1Description} footer2={gdata.c_footer2} footer3title={gdata.c_footer3Title} footer3cta={gdata.c_footer3Cta}
 footer3barcta={gdata.c_footer3BarcodeCta} footer3barimg={gdata.c_footer3Barcode} footer4links={gdata.c_footer4Links} footer4title={gdata.c_footer4Title} footer4Description={gdata.c_footer4Description} footer5img={gdata.c_footer5Image}
 footer5cta={gdata.c_footer5Cta}/>
         
         </>
    );
  };

export default PageLayout;
  