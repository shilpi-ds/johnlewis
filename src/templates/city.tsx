import * as React from "react";
// import Banner from "../components/banner";
import GetDirectionloc from "../components/commons/GetDirectionloc";
import constant from "../constant";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import HeaderBanner from "../components/commons/HeaderBanner";
import {GoogleSearchConsole} from "../config/answersHeadlessConfig";
// import { stagingBaseUrl } from "../constants";
// import bannerImage from "../images/banner.png"
import "../index.css";
var currentUrl = "";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import Banner from "../components/locationDetail/banner";
import { StaticData } from "../../sites-global/staticData";
import { Addresssvg, favicon, mobilesvg, regionNames, stagingBaseurl } from "../../sites-global/global";
import { JsonLd } from "react-schemaorg";
import Address from "../components/commons/Address";
import PageLayout from "../components/layouts/PageLayout";
//import Availability from "../components/locationDetail/Availability";
import OpenClose from "../components/commons/openClose";
import timesvg from "../images/loc3.svg";
import { Link } from "@yext/pages/components";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "johnlewis-city",
    filter: {
      entityTypes: ["ce_city"],
      
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.mainPhone",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.id",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.address",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.yextDisplayCoordinate"
    ],
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  var url: any = ""
  document.dm_directoryParents.map((i: any) => {
    if (i.meta.entityType.id == 'ce_country') {
      url = `${i.slug}`
    }
    else if (i.meta.entityType.id == 'ce_region') {
      url = `${url}/${i.slug}/${document.slug.toString()}.html`
    }
  })
  return url;
};



export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  let metaDescription = document.c_metaDescription
  ? document.c_metaDescription
  : `${document.name} | Shop new season trends in homeware, furniture and fashion at John Lewis & Partners. Discover the latest beauty products and browse must-have electricals, including iPads and TVs. Find gifts and much more at johnlewis.com.`;
let metaTitle = document.c_metaTitle
  ? document.c_metaTitle
  : `${document.name} - John Lewis & Partners | Homeware, Fashion, Electricals & More`;

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
        name: "description",
        content: `${metaDescription}`,
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
          document._site.c_robotsTag
            ? document._site.c_robotsTag
            : "noindex, nofollow"
        }`,
      },
    },

    {
      type: "link",
      attributes: {
        rel: "canonical",
        href: `${
          document.c_canonical
            ? document.c_canonical
            : stagingBaseurl
        }`,
      },
    },
    // og tags
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
        content: stagingBaseurl,
      },
    },

    {
      type: "meta",
      attributes: {
        property: "og:image",
        content: `${favicon}`,
      },
    },
    // twitter tag
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
        name: "twitter:card",
        content: "summary",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "twitter:url",
        content: stagingBaseurl,
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
        name: "twitter:image",
        content: `${favicon}`,
      },
    },
   ],
};
};

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    slug,
    dm_directoryParents,
    dm_directoryChildren,
    c_globalData,
    c_canonical,
    c_metaDescription,
    c_metaTitle,
    _site,

  } = document;
  var address;
  var c_companyrn;
  var c_footerLinks;
  var c_headerLinks1;
  var c_phoneNumber;
  var facebookPageUrl;
  var instagramHandle;
  var twitterHandle;
  var c_tikTok;
  var sortedChildren = dm_directoryChildren?.sort(function (a: any, b: any) {
    var a = a.name;
    var b = b.name;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  let slugString = "";
  document?.dm_directoryParents?.forEach((e: any) => {
    slugString += e.slug + "/";
  });

  const childrenDivs = dm_directoryChildren?.map((entity: any) => {
    //console.log(entity)
    var origin: any = null;
    if (entity.address.city) {
      origin = entity.address.city;
    } else if (entity.address.region) {
      origin = entity.address.region;
    } else {
      origin = entity.address.country;
    }
    // let key: any = Object.keys(entity.hours)[0];
    var url = "";
    var name: any = entity.name?.toLowerCase();
    var region: any = entity.address.region?.toLowerCase();
    var initialregion: any = region?.toString();
    var finalregion: any = initialregion?.replaceAll(" ", "-");
    var city: any = entity.address.city?.toLowerCase();
    var initialrcity: any = city?.toString();
    var finalcity: any = initialrcity?.replaceAll(" ", "-");
    var string: any = name?.toString();;
    let result: any = string?.replaceAll(" ", "-");
    if (!entity.slug) {
      url = `/${entity.id}-${result}.html`;
    } else {
      url = `/${entity.slug?.toString()}`;
    }



    return (

      <div className="nearby-card">
        <div className="location-name-miles icon-row">
        {/* <div className="icon"> <img className=" " src={mapimage} width="20" height="20"
                      alt="" /></div> */}
          <h2><Link className="inline-block notHighlight" href={url}
           data-ya-track={`viewstore-${entity.name}`}
           eventName={`viewstore-${entity.name}`}
           rel="noopener noreferrer"
          >{entity.name}</Link></h2>
        </div>
        <div className="icon-row">
          <Address address={entity.address} />
        </div>
        {entity.mainPhone?
        <div className="icon-row">
           {/* <div className="icon">
           <img className=" " src={Phonesvg} width="20" height="20"
                        alt="" />
                        </div> */}
          <div className="content-col">
            <a href={`tel:${entity.mainPhone}`}>{entity.mainPhone}</a>
          </div>
        </div>:''}
       
        <div className="icon-row">
          <div className="content-col open-now-string">
           
            {typeof entity.hours?.reopenDate!="undefined"?
            <h6>{StaticData.tempClosed}</h6>
          :<OpenClose timezone={entity.timezone} hours={entity.hours}/>}
           
          </div>
        </div>
        <div className="icon-row content-col availability-col">

          
        </div>



        <div className="button-bx">
          <Link className="btn" href={url}
           data-ya-track={`viewstore-${entity.name}`}
           eventName={`viewstore-${entity.name}`}
           rel="noopener noreferrer"
          >

            {StaticData.StoreDetailbtn}</Link>
          <GetDirectionloc buttonText={StaticData.getDirection} address={entity.address} latitude={entity?.yextDisplayCoordinate?.latitude} longitude={entity?.yextDisplayCoordinate?.longitude} />
        </div>
      </div>
  );
  });
 

  var url: any = ""

  document.dm_directoryParents?.map((i: any) => {
    if (i.meta.entityType.id == 'ce_country') {
      url = `${i.slug}`
    }
    else if (i.meta.entityType.id == 'ce_region') {
      url = `${url}/${i.slug}/${document.slug?.toString()}.html`
    }
  })
  let breadcrumbScheme: any = [];
  let currentIndex: any = 0;
  dm_directoryParents &&
    dm_directoryParents?.map((i: any, index: any) => {
      currentIndex = index;
      if (index != 0) {
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id": `${constant.stagingBaseurl}${i.slug}`,
            name: i.name,
          },
        });
      }
    });

  breadcrumbScheme.push({
    "@type": "ListItem",
    position: currentIndex + 1,
    item: {
      "@id": `${constant.stagingBaseurl}/${document.slug?.toString()}.html`,
      name: document.name,
    },
  });
  return (
    <>
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Matalan",
          //   url: _site.c_canonical,
          // logo: `${document.c_ogImage ? document.c_ogImage.map((result:any)=>{return result.url}) : ""}`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
      <Header logo={_site.c_johnLogo} links={_site.c_headerMenus} topmenu={_site.c_headerTopMenus}/>
        <BreadCrumbs
          name={name}
          address={address}
          parents={dm_directoryParents}
          baseUrl={relativePrefixToRoot}
        ></BreadCrumbs>
 <HeaderBanner title={_site.c_bannerTitle} description={_site.c_bannerDescription} himage={_site.c_bannerImage.image.url} blabel={_site.c_bannerUrl.label} burl={_site.c_bannerUrl.link}/>

        <div className="content-list city-page">
          <div className="container mx-auto">
            <div className="sec-title">
              <h2>
              Byredo Stores in {name}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-start -mx-2.5 lg:-mx-[.9375rem]">
              {childrenDivs}
            </div>
          </div>
        </div>
        <Footer footer1={_site.c_footer1Cta} footer1title={_site.c_footer1Title} footer1description={_site.c_footer1Description} footer2={_site.c_footer2} footer3title={_site.c_footer3Title} footer3cta={_site.c_footer3Cta}
 footer3barcta={_site.c_footer3BarcodeCta} footer3barimg={_site.c_footer3Barcode} footer4links={_site.c_footer4Links} footer4title={_site.c_footer4Title} footer4Description={_site.c_footer4Description} footer5img={_site.c_footer5Image}
 footer5cta={_site.c_footer5Cta}/>
    </>
  );
};
export default City;