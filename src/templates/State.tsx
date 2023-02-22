import * as React from "react";
import "../index.css";
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
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import HeaderBanner from "../components/commons/HeaderBanner";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import constant from "../constant";
import Banner from "../components/locationDetail/banner";
//import PageLayout from "../components/layouts/PageLayout";
import { stagingBaseurl } from "../../sites-global/global";
import { StaticData } from "../../sites-global/staticData";
import {GoogleSearchConsole} from "../config/answersHeadlessConfig";
import favicon from "../images/john-lewis.svg";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "region",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.dm_directoryChildrenCount",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.address",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.dm_directoryChildren.name",
      "dm_directoryChildren.dm_directoryChildren.id",
      "dm_directoryChildren.dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.address"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_region"],
      
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};


export const getPath: GetPath<TemplateProps> = ({ document }) => {
  let url = "";
  document.dm_directoryParents.map((i: any) => {
    if (i.meta.entityType.id == 'ce_country') {
      url += i.slug + "/";
    }
  });
  url += document.slug.toString();

  return url + '.html';
};


// export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
//   return [`index-old/${document.id.toString()}`];
// };


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

const region: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    _site,
    slug,
    address,
   
    dm_directoryParents,
    dm_directoryChildren
  } = document;
  const childrenDivs = dm_directoryChildren ? dm_directoryChildren.map((entity: any) => {
    let detlslug;


    if (typeof entity.dm_directoryChildren != "undefined") {

      if (entity.dm_directoryChildrenCount == 1) {
        entity.dm_directoryChildren.map((res: any) => {
         console.log(res,"res")
          let detlslug1 = "";

          if (!res.slug) {
            let slugString = res.id + "-" + res.name.toLowerCase();
            let slug = slugString;
            detlslug1 = `${slug}.html`;
          } else {
            detlslug1 = `${res.slug.toString()}.html`;
          }

          detlslug = detlslug1;

        })
      } else {
        detlslug = "gb/" + slug + "/" + entity.slug + ".html";
      }

    }

    return (
      <li className=" storelocation-category">
        <a
          key={entity.slug}
         // href={stagingBaseurl  + detlslug}
         href={'/'  + detlslug}
        >
          {entity.name} ({entity.dm_directoryChildrenCount})
        </a>
      </li>
    )
  }) : null;

 

  
  return (
    <>
        {/* <PageLayout gdata={_site}> */}
        <Header logo={_site.c_johnLogo} links={_site.c_headerMenus} topmenu={_site.c_headerTopMenus} free={_site.c_freeDelivery}/>
        <BreadCrumbs
            name={name}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
            address={address}
          ></BreadCrumbs>
          {/* <div className="location-dtl">     <Banner name={c_bannerHeading?c_bannerHeading:name} c_bannerImage={bannerimage}  /></div> */}
          <HeaderBanner title={_site.c_bannerTitle} description={_site.c_bannerDescription} himage={_site.c_bannerImage.image.url} blabel={_site.c_bannerUrl.label} burl={_site.c_bannerUrl.link}/>


          <div className="content-list">
            <div className="container">
            <div className="sec-title">
                <h2 style={{ textAlign: "center" }}>
              {name}
                </h2>
              </div>
              <ul className="region-list">

                {childrenDivs}
              </ul>

            </div>
          </div>

          <Footer footer1={_site.c_footer1Cta} footer1title={_site.c_footer1Title} footer1description={_site.c_footer1Description} footer2={_site.c_footer2} footer3title={_site.c_footer3Title} footer3cta={_site.c_footer3Cta}
 footer3barcta={_site.c_footer3BarcodeCta} footer3barimg={_site.c_footer3Barcode} footer4links={_site.c_footer4Links} footer4title={_site.c_footer4Title} footer4Description={_site.c_footer4Description} footer5img={_site.c_footer5Image}
 footer5cta={_site.c_footer5Cta} social={_site.c_socialFooter}/>
    </>
  )
}
export default region;
