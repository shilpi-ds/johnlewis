import * as React from "react";
import ApiCall from "../../Apis/ApiCall";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirectionloc";
//import OpenClose from "../commons/openClose"
import OpenCloseStatus from "../commons/OpenCloseStatus";
import loc3 from "../../images/loc3.svg";
import loc1 from "../../images/loc1.svg";
import loc2 from "../../images/loc2.svg";
import { Addresssvg, mobilesvg, View_Store } from "../../../sites-global/global";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "@yext/pages/components";
import { StaticData } from "../../../sites-global/staticData";
//import locDetails from "../locDetails";
//import LocDetails from "../locDetails";

export default function Nearby(props: any) {
  
  const [neabyData, setnearbyData] = React.useState(props.externalApiData.response.results);
  const metersToMiles = (meters: number) => {

    const miles = meters * 0.000621371;
    return miles.toFixed(2);
  }

  return (

    <>
      {/* <Splide
        id="splide-nearby"
        options={{
          rewind: false,
          type: "slide",
          perPage: 3,
          perMove: 1,
          arrows: false,
          drag: false,
          pagination: false,
          lazyLoad: "nearby",
          breakpoints: {
            1279: {
              perPage: 1,
              drag: true,
              pagination: true,
              arrows: false,
              type: "splide",
            },
          },
        }}
      > */}
        {neabyData.map((location: any, index: Number) => {

          // let url = "";
          // var name: any = location.data.name?.toLowerCase();
          // var region: any = location.data.address.region?.toLowerCase();
          // var initialregion: any = region.toString();
          // var finalregion: any = initialregion.replaceAll(" ", "-");
          // var city: any = location.data.address.city?.toLowerCase();
          // var initialrcity: any = city.toString();
          // var finalcity: any = initialrcity.replaceAll(" ", "-");
          // var string: any = name.toString();
          // let result1: any = string.replaceAll(" ", "-");
          // if (!location.data.slug) {
          //   url = `/${location.data.id}-${result1}.html`;
          // } else {
          //   url = `/${location.data.slug.toString()}.html`;
          // }
      
          if (index > 0) {
            return (
              <>
              
                <div className="bg-white shadow-lg w-[21.875rem] box_shadow drop-shadow-md">
                {/* <p className="text-center">Near by stores</p> */}

        <div className="flex justify-between items-center pt-3 ml-4">
            <h5 className="underline underline-offset-8 font-bold"><Link className="inline-block notHighlight" href={location.data.slug}
                data-ya-track={`${location.data.name}`}
                eventName={`${location.data.name}`}
                rel="noopener noreferrer">{location.data.name}</Link></h5>
                {/* {typeof location.distance != "undefined" ? <p className="pr-4 text-xs">{metersToMiles(location.distance)} miles</p>: ''} */}
        </div>

        <div className="flex mt-4 ml-4">
            <img className="h-[25px]" src={loc1} alt=""/>
            <div className="pl-4"><Address address={location.data.address} /></div>
          
        </div>

        <div className="flex mt-4 ml-4">
            <img className="h-[25px]" src={loc2} alt=""/>
            <p className="text-sm pl-4"><a href={`tel:${location.data.mainPhone}`}> {location.data.mainPhone}</a></p>

        </div>
        {location.data.hours?
        <div className="flex mt-4 ml-4">
            <img className="h-[25px]" src={loc3} alt=""/>
            <p className="text-sm pl-4"><OpenCloseStatus timezone={location.data.timezone} hours={location.data.hours} deliveryHours={location.data.hours}/></p>
        </div>
        :<div className="closeddot notHighlight red-dot">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
    <circle id="Ellipse_5" data-name="Ellipse 5" cx="4" cy="4" r="4" fill="#ad1e1f"/>
    </svg>
           <div className="hours-info text-lg font-second-main-font closeddot"> 
           Closed
           </div>
           </div>
    }
        <div className="mt-[1.375rem] flex justify-center gap-2 pb-6">
            <button className="text-white text-sm py-1 bg-black w-[8.75rem]"><GetDirection buttonText={props.c_getDirectionsCTAText?props.c_getDirectionsCTAText:"Shop Directions"} address={location.data.address} latitude={location.data.displayCoordinate ? location.data.displayCoordinate.latitude : location.data.yextDisplayCoordinate.latitude} longitude={location.data.displayCoordinate ? location.data.displayCoordinate.longitude : location.data.yextDisplayCoordinate.longitude} />
            </button>
            <button className="text-white text-sm py-1 bg-black w-[8.75rem]"><Link className="btn" href={location.data.slug+".html"}
                data-ya-track={`viewstore-${location.data.name}`}
                eventName={`viewstore-${location.data.name}`}
                rel="noopener noreferrer">
                 {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                 View Details</Link></button>
        </div>
    </div>



 




              </>

            )
          }
        }

        )
        }
    
    </>
  )
}
