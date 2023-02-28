import * as React from "react";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import HeaderBanner from "../components/commons/HeaderBanner";
import GetDirection from "../components/commons/GetDirectionloc";
import LocDetails from "../components/locDetails";
import Breadcrumb from "../components/layouts/Breadcrumb";
import OpenClose from "../components/commons/openClose";
import OpenCloseStatus from "../components/commons/OpenCloseStatus";
import loc1 from "../images/loc1.svg";
import loc2 from "../images/loc2.svg";
import loc3 from "../images/loc3.svg";
import Contact from "../components/locationDetail/contact";
import CustomMap from "../components/locationDetail/CustomMap";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import Accordion from "../components/commons/Accordion";
import {stagingBaseurl,GoogleSearchConsole ,AnswerExperienceConfig} from "../../src/config/answersHeadlessConfig";
import favicon from "../images/john-lewis.svg";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import OfferSlider from "../components/locationDetail/OfferSlider";
import StoreGuide from "../components/locationDetail/StoreGuide";
import Nearby from "../components/locationDetail/Nearby";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import {apikey_for_entity, baseuRL,AnalyticsEnableDebugging,AnalyticsEnableTrackingCookie} from "../../sites-global/global";
import "../index.css";
import { JsonLd } from "react-schemaorg";
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
    "dm_directoryParents.name",
    "dm_directoryParents.slug",
    "dm_directoryParents.meta.entityType",
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

  var url=document.slug?document.slug.toString():(document.id+"-"+document.name.toLowerCase());
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
    let slugString = document.id+"-"+document.name.toLowerCase();
   // let slug = slugify(slugString);
    url = `${slugString}+.html`;
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
            document.c_canonicalURL? document.c_canonicalURL : stagingBaseurl +  url
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
          content:`${document.c_johnLogo ? document.c_johnLogo.image.url : "https://a.mktgcdn.com/p-sandbox/vmLX9HZXAYj_-h8v_XTQ8kI_JH7RDzALu62-n-zEWvw/356x68.png"}`,
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
          content: `${document.c_johnLogo ? document.c_johnLogo.image.url : "https://a.mktgcdn.com/p-sandbox/vmLX9HZXAYj_-h8v_XTQ8kI_JH7RDzALu62-n-zEWvw/356x68.png"}`,
        },
      },
    ],
  };
};


type ExternalApiData = TemplateProps & { fexternalApiData: nearByLocation };
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
          dm_directoryParents,
      c_storeGuideDetails,
        name
  } = document;
  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
  document.dm_directoryParents.map((i: any, index: any) => {
    if (i.meta.entityType.id == "ce_country") {
      document.dm_directoryParents[index].name =
        document.dm_directoryParents[index].name;
      document.dm_directoryParents[index].slug =
        document.dm_directoryParents[index].slug;

      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
       
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    } else if (i.meta.entityType.id == "ce_region") {
      let url = "";
      document.dm_directoryParents.map((j: any) => {
        if (
          j.meta.entityType.id != "ce_region" &&
          j.meta.entityType.id != "ce_city" &&
          j.meta.entityType.id != "ce_root"
        ) {
          //console.log(j, "j");
          url = url  + j.slug;
        }
      });
      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
            url + "/" +
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    } else if (i.meta.entityType.id == "ce_city") {
      let url = "";
      document.dm_directoryParents.map((j: any) => {
        if (
          j.meta.entityType.id != "ce_city" &&
          j.meta.entityType.id != "ce_root"
        ) {
          //console.log(j, "j");
          url = url  + "/" + j.slug;
        }
      });
      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
            url +"/" +
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    }
  });

breadcrumbScheme.push({
  "@type": "ListItem",
  position: 4,
  item: {
    "@id": stagingBaseurl + path,
    name: document.name,
  },
});
 
  let imageurl = photoGallery ? photoGallery.map((element: any) => {
    return element.image.url
  }) : null;
//console.log(c_storeGuideDetails);
  return (

    <>

     
<Header logo={_site.c_johnLogo} links={_site.c_headerMenus} topmenu={_site.c_headerTopMenus} free={_site.c_freeDelivery}/>
<JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          image: imageurl,
          telephone: mainPhone,
          url: `${document.c_canonicalURL?document.c_canonicalURL:stagingBaseurl}${slug?slug:`${name}`}.html`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
<BreadCrumbs
          name={name}
          address={address}
          parents={dm_directoryParents}
          baseUrl={relativePrefixToRoot}
        ></BreadCrumbs>
<HeaderBanner title={_site.c_bannerTitle} description={_site.c_bannerDescription} himage={_site.c_bannerImage.image.url} blabel={_site.c_bannerUrl.label} burl={_site.c_bannerUrl.link}/>

     

          <div className="mt-3 bg-[#F1F6FA]">
        <p className="text-[1.75rem] font-medium text-center py-3"><OpenCloseStatus timezone={timezone} hours={hours} /></p>
    </div>
          <div className="Main flex mx-9 mt-5">
          <div className="Storeinfo min-w-[20.563rem] bg-white drop-shadow-md">
          <h5 className="underline underline-offset-8 font-medium text-lg ml-6 pt-4">{name}</h5>
          <LocDetails address={address.line1} loc1={loc1} loc2={loc2} loc3={loc3} phone={mainPhone} name={name} hours={hours} timezone={timezone} city={address.city} postcode={address.postalCode} addline1={address.line1} addline2={address.line2}/>
          
     

        <div className="button flex gap-1 justify-center mt-5 mb-10 ">
        
                <button className="text-sm text-white bg-[#141414] px-5 py-1">{ displayCoordinate ? <GetDirection buttonText="Shop Directions" address={address}  latitude={displayCoordinate?.latitude} longitude={displayCoordinate?.longitude} />
                : <GetDirection buttonText="Shop Directions" address={address} latitude={yextDisplayCoordinate?.latitude} longitude={yextDisplayCoordinate?.longitude} />
              }  </button>
        
               
            </div>
            </div>
            
            {/* <LocationInformation
            prop={hours}
            coords={yextDisplayCoordinate}
            address={address}
            phone={mainPhone}
            timezone={timezone}
            hours={hours}
            additionalHoursText={additionalHoursText}
          /> */}
                    <Contact address={address} timezone={timezone} 
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
            <h1 className=" text-[40px]">{c_title}</h1>
            <p className="pt-7 pb-[50px]">{description}
            </p>
            {c_seoCta.link && c_seoCta.label?
            <button className="bg-[#141414] text-white px-7 py-2"><a className="" href={c_seoCta.link}>{c_seoCta.label}</a></button>
            : ''}
        </div>

        <div className="images flex relative">
            <div className=""><img className="w-[34.662rem] h-[25.044rem] rounded-2xl" src={c_backImage.url} alt=""/></div>
            <div className="" ><img className="w-[34.662rem] h-[25.044rem] object-cover absolute top-10 right-[34px] rounded-xl" src={c_mainImage.url} alt=""/></div>
        </div>

    </div>

   
   

 {photoGallery ?
              <div className="featured mb-[60px] h-[41.875rem] bg-[#f1f6fa]">
              <h2 className="pt-9 pb-[3.125rem]">{c_sliderTitle}</h2>
              <div className="photo-slider">{photoGallery && <PhotoSlider photoGallery={photoGallery}/> }</div>
      </div>
      : ''}
        {c_brandGallery &&
        <PhotoGallery gallery={c_brandGallery} title={c_brandTitle}/>
}
{c_offers &&
<OfferSlider offer={c_offers}/>
}
{c_storeGuideDetails &&
<StoreGuide title={c_storeGuideHeading} detail={c_storeGuideDetails}/>
}
       

     {c_relatedFaqs && <Accordion content={c_relatedFaqs} title={c_faqTitle}/> }
      

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
 footer5cta={_site.c_footer5Cta} social={_site.c_socialFooter}/>
          {/* </PageLayout> */}
          
    </>
  );
};

export default Location;

function toLowerCase(name: any) {
  throw new Error("Function not implemented.");
}
