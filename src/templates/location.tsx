import * as React from "react";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import HeaderBanner from "../components/commons/HeaderBanner";
import GetDirection from "../components/commons/GetDirectionloc";
import LocDetails from "../components/locDetails";
import OpenClose from "../components/commons/openClose";
import OpenCloseStatus from "../components/commons/OpenCloseStatus";
import loc1 from "../images/loc1.svg";
import loc2 from "../images/loc2.svg";
import loc3 from "../images/loc3.svg";
import Contact from "../components/locationDetail/contact";
import CustomMap from "../components/locationDetail/CustomMap";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import Accordion from "../components/commons/Accordion";
import {stagingBaseurl,AnalyticsEnableDebugging,AnalyticsEnableTrackingCookie,GoogleSearchConsole ,AnswerExperienceConfig} from "../../src/config/answersHeadlessConfig";
import favicon from "../images/john-lewis.svg";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import OfferSlider from "../components/locationDetail/OfferSlider";
import StoreGuide from "../components/locationDetail/StoreGuide";
import Nearby from "../components/locationDetail/Nearby";
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
      "c_backImage",
      "c_mainImage",
      "c_seoCta",
      "photoGallery",
      "c_sliderTitle",
      "c_relatedFaqs.question",
      "c_relatedFaqs.answer",
      //"c_relatedFaqs.question",
      //"c_relatedFaqs.answer",
      "c_johnLogo",
      "c_faqTitle",
      "c_brandTitle",
      "c_offers",
      "c_brandGallery",
      "c_storeGuideHeading",
      "c_storeGuideDetails",
      "c_canonicalURL",
    "c_metaDescription",
    "c_metaTitle",
    "c_robotsTag",
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

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  let url = "";
  if (!document.slug) {
    let slugString = document.id + " " + document.name;
    let slug = slugify(slugString);
    url = `${slug}+.html`;
  } else {
    url = `${document.slug.toString()}+.html`;
  }
  // <meta name="google-site-verification" content="WIqhwAw2ugRAKEYRRqis1ZfUBbnWe_AXSoDltHceCbI" />
  let metaDescription = document.c_metaDescription
    ? document.c_metaDescription
    : `${document.name} | Shop new season trends in homeware, furniture and fashion at John Lewis & Partners. Discover the latest beauty products and browse must-have electricals, including iPads and TVs. Find gifts and much more at johnlewis.com.`;
  let metaTitle = document.c_metaTitle
    ? document.c_metaTitle
    : `${document.name} | John Lewis & Partners | Homeware, Fashion, Electricals & More`;
  return {
    title: metaTitle,
    charset: "UTF-8",
    viewport:
      "width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0",
    tags: [
      {
        type: "meta",
        attributes: {
          name: GoogleSearchConsole.name,
          content: GoogleSearchConsole.content,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/png",
          href: favicon,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: "John Lewis",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "robots",
          content: `${
            document.c_robotsTag ? document.c_robotsTag : "noindex, nofollow"
          }`,
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${
            document.c_canonical ? document.c_canonical : stagingBaseurl +  url
          }`,
        },
      },

      //og tag
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: stagingBaseurl  + url,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: `${favicon
            //document.document.c_johnLogo.image.url
          }`,
        },
      },
      //twitter tag
      {
        type: "meta",
        attributes: {
          property: "twitter:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: stagingBaseurl  + url,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: `${favicon
            // document.c_johnLogo.image.url
              
          }`,
        },
      },
    ],
  };
};


type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
 export const transformProps: TransformProps<ExternalApiData> = async (
   data: any
 ) => {

   var location = `${data.document?.yextDisplayCoordinate ? data.document?.yextDisplayCoordinate?.latitude : data.document?.displayCoordinate?.latitude},${data.document?.yextDisplayCoordinate ? data.document?.yextDisplayCoordinate?.longitude : data.document?.displayCoordinate?.longitude}`;

     const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${AnswerExperienceConfig.experienceKey}&api_key=${AnswerExperienceConfig.apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${AnswerExperienceConfig.verticalKey}&limit=4&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;
  //console.log(url)
   const externalApiData = (await fetch(url).then((res: any) =>
     res.json()

   )) as nearByLocation;
   return { ...data, externalApiData };
 };




type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
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
         c_backImage,
        c_mainImage,
        c_seoCta,
         photoGallery,
         c_sliderTitle,
         c_relatedFaqs,
         timezone,
        yextDisplayCoordinate,
         displayCoordinate,
         cityCoordinate,
         c_faqTitle,
         c_brandTitle,
           c_brandGallery,
          c_offers,
          c_storeGuideHeading,
      c_storeGuideDetails,
        name
  } = document;
 // console.log(_site);
/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
// 
// const Location: Template<TemplateRenderProps> = ({
//   relativePrefixToRoot,
//   path,
//   document,
//   __meta,
 
// }) => {
//   const {
//     _site,
//     address,
//     slug,
//     hours,
//     mainPhone,
//     additionalHoursText,
//     description,
//     c_title,
//     c_backImage,
//     c_mainImage,
//     c_seoCta,
//     photoGallery,
//     c_sliderTitle,
//     c_relatedFaqs,
//     timezone,
//     yextDisplayCoordinate,
//     displayCoordinate,
//     cityCoordinate,
//     c_faqTitle,
//     c_brandTitle,
//       c_brandGallery,
//       c_offers,
//     name
//   } = document;

  let imageurl = photoGallery ? photoGallery.map((element: any) => {
    return element.image.url
  }) : null;
//console.log(c_storeGuideDetails);
  return (

    <>
{/* <PageLayout gdata={_site}> */}
     
<Header logo={_site.c_johnLogo} links={_site.c_headerMenus} topmenu={_site.c_headerTopMenus}/>
<HeaderBanner title={_site.c_bannerTitle} description={_site.c_bannerDescription} himage={_site.c_bannerImage.image.url} blabel={_site.c_bannerUrl.label} burl={_site.c_bannerUrl.link}/>
     

          <div className="mt-3 bg-[#F1F6FA]">
        <p className="text-[1.75rem] font-medium text-center py-3"><OpenCloseStatus timezone={timezone} hours={hours} /></p>
    </div>
          <div className="Main flex mx-9 mt-5">
          <div className="Storeinfo min-w-[20.563rem] bg-white drop-shadow-md">
          <LocDetails address={address.line1} loc1={loc1} loc2={loc2} loc3={loc3} phone={mainPhone} name={name} hours={hours} timezone={timezone} city={address.city} postcode={address.postalCode} addline1={address.line1} addline2={address.line2}/>
          
        {/* <ul className="">
          <li className="button-bx direction-button">
          {displayCoordinate ?
          <GetDirection buttonText="Shop Directions" address={address}  latitude={displayCoordinate?.latitude} longitude={displayCoordinate?.longitude} />
          : <GetDirection buttonText="Shop Directions" address={address} latitude={yextDisplayCoordinate?.latitude} longitude={yextDisplayCoordinate?.longitude} />
        }
          </li>
        </ul>  */}

        <div className="button flex gap-1 justify-center mt-5 mb-10 ">
        
                <button className="text-sm text-white bg-[#141414] px-5 py-1">{ displayCoordinate ? <GetDirection buttonText="Shop Directions" address={address}  latitude={displayCoordinate?.latitude} longitude={displayCoordinate?.longitude} />
                : <GetDirection buttonText="Shop Directions" address={address} latitude={yextDisplayCoordinate?.latitude} longitude={yextDisplayCoordinate?.longitude} />
              }  </button>
        
               
            </div>
            </div>
            <div className="Store_time min-w-[20.813rem] bg-white drop-shadow-md ml-4">
            <div className="flex items-center pt-4 ml-6 justify-between">
                <h5 className="underline underline-offset-8 font-medium text-lg">Store Time</h5>
                <p className="text-xs pr-6">Holiday Hour</p>
            </div>
            <div className="timing bg-[#f1f6fa] min-w-[20.813rem] mt-[10px]">
                <div className="flex items-center p-2 pl-6 gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.66667 9.33333L1.33333 6L2.27333 5.05333L4.66667 7.44667L9.72667 2.38667L10.6667 3.33333M10.6667 0H1.33333C0.593333 0 0 0.593333 0 1.33333V10.6667C0 11.0203 0.140476 11.3594 0.390524 11.6095C0.640573 11.8595 0.979711 12 1.33333 12H10.6667C11.0203 12 11.3594 11.8595 11.6095 11.6095C11.8595 11.3594 12 11.0203 12 10.6667V1.33333C12 0.979711 11.8595 0.640573 11.6095 0.390524C11.3594 0.140476 11.0203 0 10.6667 0Z"
                            fill="#141414" />
                    </svg>

                    {/* <p>Monday</p>
                    <p className="text-sm">12:00 - 17:00</p> */}
                    <Contact address={address} 
            hours={hours}  additionalHoursText={additionalHoursText} ></Contact> 
                </div>
            </div>
        </div>

           
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
            <img className="max-w-[34.663rem]" src={c_backImage.url} alt=""/> 
            <img className="max-w-[34.663rem] absolute top-10 right-[34px]" src={c_mainImage.url} alt=""/>
        </div>

    </div>
 {photoGallery ?
              <div className="featured">
              <h2>{c_sliderTitle}</h2>
              <div className="photo-slider">{photoGallery && <PhotoSlider photoGallery={photoGallery}/> }</div>
      </div>
      : ''}
        {c_brandGallery &&
        <PhotoGallery gallery={c_brandGallery} title={c_brandTitle}/>
}
{c_offers &&
<OfferSlider offer={c_offers}/>
}

<StoreGuide title={c_storeGuideHeading} detail={c_storeGuideDetails}/>

        {c_relatedFaqs ?
      <div className="faq-content">
        <div className="faq-title">{c_faqTitle}</div>
        <div className="faqs"><section className="faq-container">{c_relatedFaqs && <Accordion content={c_relatedFaqs}/> }</section></div>
        </div>
        :''}
             {yextDisplayCoordinate || cityCoordinate || displayCoordinate ?
         

             <div className="mb-[60px]">
        <h2 className=" text-[40px] text-center">Nearby Stores</h2>
        <div className="location-near">  <Nearby externalApiData={externalApiData} /> </div>
                 <div className="button flex justify-center pt-8">
            <button className="flex gap-2 items-center text-sm text-white bg-[#141414] px-[35px] py-1.5"><a href="/index.html">View All Locations</a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L16 12L12 8L10.6 9.4L12.2 11H8V13H12.2L10.6 14.6L12 16ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z" fill="#FFFCF8"/>
                </svg>
            </button>                    
        </div>
            </div> 
         
          
          : ''}

          <Footer footer1={_site.c_footer1Cta} footer1title={_site.c_footer1Title} footer1description={_site.c_footer1Description} footer2={_site.c_footer2} footer3title={_site.c_footer3Title} footer3cta={_site.c_footer3Cta}
 footer3barcta={_site.c_footer3BarcodeCta} footer3barimg={_site.c_footer3Barcode} footer4links={_site.c_footer4Links} footer4title={_site.c_footer4Title} footer4Description={_site.c_footer4Description} footer5img={_site.c_footer5Image}
 footer5cta={_site.c_footer5Cta}/>
          {/* </PageLayout> */}
          
    </>
  );
};

export default Location;