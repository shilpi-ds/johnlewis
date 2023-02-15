import * as React from "react";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import HeaderBanner from "../components/commons/HeaderBanner";
import GetDirection from "../components/commons/GetDirectionloc";
import LocDetails from "../components/locDetails";
import OpenClose from "../components/commons/openClose";
import loc1 from "../images/loc1.svg";
import loc2 from "../images/loc2.svg";
import loc3 from "../images/loc3.svg";
import Contact from "../components/locationDetail/contact";
import CustomMap from "../components/locationDetail/CustomMap";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import Accordion from "../components/commons/Accordion";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";


/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "displayCoordinate",
      "cityCoordinate",
      "c_title",
      "description",
      "c_image",
      "c_seoCta",
      "photoGallery",
      "c_sliderTitle",
      "c_relatedFaqs.question",
      "c_relatedFaqs.answer",
      //"c_relatedFaqs.question",
      //"c_relatedFaqs.answer",
      "c_faqTitle",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
     entityTypes:['location']

    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // var url = "";
  // var name: any = document.name.toLowerCase();
  // var string: any = name.toString();;
  // let result: any = string.replaceAll(" ", "-");
  // document.dm_directoryParents.map((result: any, i: Number) => {
  //   if (i > 0) {
  //     url += result.slug + "/"
  //   }
  // })
  // if (!document.slug) {
  //   url += `${result}.html`;
  // } else {
  //   url += `${document.slug.toString()}.html`;
  // }

  var url=document.slug?document.slug:document.id;
  return url+".html";
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
// 
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
 
}) => {
  const {
    _site,
    address,
    slug,
    hours,
    mainPhone,
    additionalHoursText,
    description,
    c_title,
    c_image,
    c_seoCta,
    photoGallery,
    c_sliderTitle,
    c_relatedFaqs,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    c_faqTitle,
    name
  } = document;

  let imageurl = photoGallery ? photoGallery.map((element: any) => {
    return element.image.url
  }) : null;
console.log(photoGallery);
  return (

    <>
{/* <PageLayout gdata={_site}> */}
     
<Header logo={_site.c_johnLogo} links={_site.c_headerMenus} topmenu={_site.c_headerTopMenus}/>
<HeaderBanner title={_site.c_bannerTitle} description={_site.c_bannerDescription} himage={_site.c_bannerImage.image.url} blabel={_site.c_bannerUrl.label} burl={_site.c_bannerUrl.link}/>
     
<div className="container">
            <div className='banner-text banner-dark-bg justify-center text-center'>
              {/* <h1 className="">{name}</h1> */}
                <div className="openClosestatus detail-page closeing-div">
                  <OpenClose timezone={timezone} hours={hours} />
                </div> 
            </div>
          </div>
         <div className="location-information">
          <div className="address-main-sec">
          <LocDetails address={address.line1} loc1={loc1} loc2={loc2} loc3={loc3} phone={mainPhone} name={name} hours={hours} timezone={timezone} city={address.city} postcode={address.postalCode} addline1={address.line1} addline2={address.line2}/>
          
        <ul className="">
          <li className="button-bx direction-button">
          {displayCoordinate ?
          <GetDirection buttonText="Shop Directions" address={address}  latitude={displayCoordinate?.latitude} longitude={displayCoordinate?.longitude} />
          : <GetDirection buttonText="Shop Directions" address={address} latitude={yextDisplayCoordinate?.latitude} longitude={yextDisplayCoordinate?.longitude} />
        }
          </li>
        </ul> 
 </div>
<Contact address={address} 
            hours={hours}  additionalHoursText={additionalHoursText} ></Contact> 
           
          {
            hours ?
              <div className="map-sec" id="map_canvas">
                <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
              </div> :
              <div className="map-sec without-hours" id="map_canvas">
                <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
              </div>
          } 
 </div>
 
 <div className="flex mt-[60px] items-center gap-12 justify-center">
        <div className="Content max-w-[40.875rem]">
            <h1 className="text-black text-[40px]">{c_title}</h1>
            <p className="pt-7 pb-[50px]">{description}
            </p>
            {c_seoCta.link && c_seoCta.label?
            <button className="bg-[#141414] text-white px-7 py-2"><a className="" href={c_seoCta.link}>{c_seoCta.label}</a></button>
            : ''}
        </div>

        <div className="images flex relative">
            <img className="max-w-[34.663rem]" src={c_image.url} alt=""/> 
            <img className="max-w-[34.663rem] absolute top-10 right-[34px]" src={c_image.url} alt=""/>
        </div>

    </div>
 
        
        {c_relatedFaqs ?
      <div className="faq-content">
        <div className="faq-title">{c_faqTitle}</div>
        <div className="faqs"><section className="faq-container">{c_relatedFaqs && <Accordion content={c_relatedFaqs}/> }</section></div>
        </div>
        :''}

          <Footer footer1={_site.c_footer1Cta} footer1title={_site.c_footer1Title} footer1description={_site.c_footer1Description} footer2={_site.c_footer2} footer3title={_site.c_footer3Title} footer3cta={_site.c_footer3Cta}
 footer3barcta={_site.c_footer3BarcodeCta} footer3barimg={_site.c_footer3Barcode} footer4links={_site.c_footer4Links} footer4title={_site.c_footer4Title} footer4Description={_site.c_footer4Description} footer5img={_site.c_footer5Image}
 footer5cta={_site.c_footer5Cta}/>
          {/* </PageLayout> */}
          
    </>
  );
};

export default Location;