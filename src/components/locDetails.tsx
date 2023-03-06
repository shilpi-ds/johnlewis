import * as React from "react";
import { useState } from 'react';
import Hours from "./commons/hours";
import OpenCloseStatus from "./commons/OpenCloseStatus";
import {svgIcons} from "../images/svg-icons/svgIcon";

type details = {
  address?: string;
  loc1?: any;
loc2?:any;
phone?:any;
name?:string;
hours?:any;
timezone?:any;
 city?:any;
 postcode?:any;
 addline1?:any;
 addline2?:any; 
 loc3?:any;
};


const locDetails = (props: details) => {
  const { address, loc1 ,loc2,loc3,phone,name,hours,timezone,city,postcode,addline1,addline2} = props;
  //console.log(props);
  return (
<>
  

            
            <div className="Store_location ml-6 mt-5 flex">
             {svgIcons.addressjohn}

                <p className="pl-4">{addline1},{addline2}<br/>
                {city}, <br/>
                     {postcode}
                </p>
            </div>
            {phone &&
            <div className="phone_number ml-6 mt-3 flex">
                {svgIcons.phonejohn}

                <p className="pl-4"><a id="address" className=" location-phn" href={`tel:${phone}`}>
                {phone}
              </a></p>
            </div>
}

{hours && (

         
      
<div className="closing_time ml-6 mt-3 flex">
{svgIcons.storejohn}

                <p className="pl-4"> <OpenCloseStatus timezone={timezone} hours={hours}/></p>
            </div>

   )}




   
      
    </>
  
  );
};

export default locDetails;


