import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "../../types/search/locations";
import GetDirection from "../commons/GetDirection";
//import redmapimage from "../../images/red-map.svg";
import loc1 from "../../images/loc1.svg";
import loc2 from "../../images/loc2.svg";
import loc3 from "../../images/loc3.svg";
import timesvg from "../../images/watch-icn.svg"
import Address from "../commons/Address";
import OpenClose from "../commons/openClose";
import { StaticData } from "../../../sites-global/staticData";
import { Link } from "@yext/pages/components";
import getDirectionUrl from "../commons/GetDirection"
import OpenCloseStatus from "../../components/commons/OpenCloseStatus";
import Hours from "../commons/hourscard";
import { svgIcons } from "../../images/svg-icons/svgIcon";
import { slugify, defaultTimeZone  } from "../../config/answersHeadlessConfig";
import $ from "jquery";
const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}
let array = [];



const LocationCard: CardComponent<Location> = ({result}) => {

  let url = "";
  const[hoursopen,setHoursopen]=React.useState(false);
  const {
    id,
    hours,
    mainPhone,
    
  } = result.rawData;
  const [time, setTime] = React.useState({});
  const [timezone, setTimeZone] = React.useState("");
  const [withoutHourClass, setWithoutHourClass] = React.useState("");
  //const formattedPhone = formatPhoneNumber(mainPhone);
  React.useEffect(() => {
    setTime(result.rawData);
    setTimeZone(result.rawData.timezone);
    if (!result.rawData) {
      setWithoutHourClass("withoutHours");
    }
    // getCurrentLocationLatLng();
  });


  /**
   * Function to convert Date format in dd-mm-yy
   */
  let a;
  let s;
  let dateNewFormat;
  function join(t: any, a: any, s: any) {
    function format(m: any) {
      let f = new Intl.DateTimeFormat("en", m);
      return f.format(t);
    }
    return a.map(format).join(s);
  }
  if (hours?.reopenDate) {
    a = [{ day: "numeric" }, { month: "long" }, { year: "numeric" }];
    s = join(new Date(hours?.reopenDate), a, " ");
    dateNewFormat = s;
  }


  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
      $('.daylist').show();
    } else {
      setTimeStatus("");
      $('.daylist').hide();
    }
  };





function opentime(e: any) {
  //console.log(e.target);
  var closethis = e.target.closest(".lp-param-results");
  if (closethis.querySelector('.storelocation-openCloseTime').classList.contains("hidden")) {
    closethis.querySelector('.storelocation-openCloseTime').classList.remove("hidden")
    setHoursopen(true);
  }
  else {
    closethis.querySelector('.storelocation-openCloseTime').classList.add("hidden")
    setHoursopen(false);
  }
}

    const { address } = result.rawData;
//     var name: any = result.rawData.name?.toLowerCase();
//   var region: any = result.rawData.address.region?.toLowerCase();
//   var initialregion: any = region.toString();
//   var finalregion: any = initialregion.replaceAll(" ", "-");
//   var city: any = result.rawData.address.city?.toLowerCase();
//   var initialrcity: any = city.toString();
//   var finalcity: any = initialrcity.replaceAll(" ", "-");
//   var string: any = name.toString();
//   let result1: any = string.replaceAll(" ", "-");
//  if (!result.rawData.slug) {
//    url= `/${result.rawData.id}-${result1}.html`;
//  } else {
//    url= `/${result.rawData.slug.toString()}.html`;
//  }
  
  return (
    <div className="bg-white shadow-lg max-w-[30.625rem] mt-5 mb-5">
        <div className="flex justify-between items-center pt-3 ml-4">
            <h5 className="underline underline-offset-8 font-bold text-lg"><a href={result.rawData.slug+".html"}>{result.rawData.name}</a></h5>
            {typeof result.distance != "undefined" ?  
            <p className="pr-6 text-base font-semibold">{metersToMiles(result.distance)} <span>{StaticData.miles}</span></p>
             : ''}
        </div>
        <div className="flex mt-5 ml-4">
            <img className="h-[25px]" src={loc1} alt=""/>
            <p className="pl-4">{address.line1},{address.line2}<br/>
            {address.city},{address.region}<br/>
            {address.postalCode}</p>
        </div>
        <div className="flex mt-3 ml-4">
            <img className="h-[25px]" src={loc2} alt=""/>
            <p className="pl-4"> <a href={`tel:${result.rawData.mainPhone}`}>{result.rawData.mainPhone}</a></p>

        </div>
        <div className="flex mt-3 ml-4">
            <img className="h-[25px]" src={loc3} alt=""/>
            {/* <p className="pl-4">Closed - Opens at 08:00</p> */}
       

            {hours ? (
        <>
          {Object.keys(hours).length > 0 ? (
            <>
              <div className="OpenCloseStatus icon-row">
                
                {hours && hours?.reopenDate ?
                <div>
                  <OpenCloseStatus
                        timezone={timezone ? timezone : defaultTimeZone}
                        hours={hours}
                  />
                    The Store will reopen at {dateNewFormat}
                </div>
                        
                :
                <Link
                className={timeStatus + "onhighLight "}
                href="javascript:void(0);"
                onClick={onOpenHide}
              >
                <OpenCloseStatus
                timezone={timezone ? timezone : defaultTimeZone}
                hours={hours}
        />
          </Link>}

                <div className={timeStatus + " daylist"}>
                  <Hours hours={hours ? hours : {}} 
                   timezone={timezone ? timezone : {}}/>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
     
        </>
      ) : (
        <></>
      )} </div>

        <div className="mt-[1.375rem] flex justify-center gap-2 pb-6">
            <button className="text-white text-sm py-1.5 bg-black min-w-[11.25rem]"> <Link
            data-ya-track="getdirections"
            eventName={`getdirections`}
            className="direction button before-icon"
            onClick={() => getDirectionUrl(result.rawData)}
            href="javascript:void(0);"
            id="buttonget"
            rel="noopener noreferrer"
            //conversionDetails={conversionDetails_direction}
          >Shop Directions </Link></button>
            <button className="text-white text-sm py-1.5 bg-black min-w-[11.25rem]"><Link type="button" href={result.rawData.slug+".html"} className=" btn notHighlight "
        data-ya-track={`viewStore -${result.rawData.name}`}
        eventName={`viewStore -${result.rawData.name}`}
        rel="noopener noreferrer"
        >View details</Link></button>
        </div>
   
      
    </div>

  );

}

export default LocationCard;