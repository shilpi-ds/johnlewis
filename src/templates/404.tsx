// src/template/404.tsx
import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";
import * as React from "react";
import favicon from "../images/john-lewis.svg";
import { StaticData } from "../../sites-global/staticData";
import PageLayout from "../components/layouts/PageLayout";
import "../index.css";
import hanger from "../images/hanger.jpg";
export const config: TemplateConfig = {
  stream: {
    $id: "404",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "name",
      
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["global-data"]
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Page Not Found",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
    ]
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = ({
  document,
}) => {
  const {
    _site
  } = document;
  return (
    <>
      <PageLayout gdata={_site}>

      <div className="max-w-[1200px] m-auto border bg-[#cccccc] mb-[60px]">
    <div className="text-center mb-6 mt-20">
        <h1 className="text-3xl">HANG ON</h1>
    </div>
    <div className="text-center text-xl pb-4 ">
        <p>We can’t find the page you’re looking for. <br/> Please return to our <a className="underline" href="/">homepage.</a></p>
    </div>
    <img src={hanger} alt=""/>
</div>
        
        {/* <div className="content-list">
          <img src={hanger}/>
          <div className="container">
            <div className="sec-title text-center">
              <h1 className="" style={{ textAlign: "center" }}>
                {StaticData.PagenotFound}
              </h1>
              <p>{StaticData.cantfind_page}.</p>
              <p>{StaticData.Youcouldtry}</p>
              <div className="button-bx max-w-[45rem] !mx-auto !mt-5">
                <a className="btn" href="javascript:history.back()">{StaticData.Previuspage} &gt;</a>
                <a className="btn" href="/">{StaticData.homePage} &gt;</a>
              </div>
            </div>


          </div>
        </div> */}
      </PageLayout>
    </>
  );
};

export default FourOhFour;
