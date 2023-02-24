import * as React from "react";
import Cta from "../commons/cta";
//import Hours from "../commons/hours";
import Hours from "../commons/hourscard";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirectionloc";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";

const Contact = (props: any) => {
  const {
    address,
    phone,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    c_storeInfoHeading,
    c_getDirectionsCTAText
  } = props;
  return (
    <>
      

      {hours && typeof hours.monday != "undefined" ? (
        <div className="Store_time min-w-[20.813rem] bg-white drop-shadow-md ml-4">
          <div className="flex items-center pt-4 ml-6 justify-between">
                <h5 className="underline underline-offset-8 font-medium text-lg">Store Time</h5>
                <p className="text-xs pr-6">{hours.holidayHours && typeof hours.reopenDate == "undefined" ? (
                <>
                  <Model
                    name={StaticData.Holdiay}
                    holidayHours={hours.holidayHours}
                    c_specific_day={c_specific_day}
                  />
                </>
              ) : (
                ""
              )}</p>
            </div>
            
          
    
              {hours && (
                <Hours
                  
                  additionalHoursText={additionalHoursText}
                  hours={hours}
                  c_specific_day={c_specific_day}
                />
              )}
            </div>
          
        
      ) : (
        ""
      )}
    </>
  );
};

export default Contact;
