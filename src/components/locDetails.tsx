import * as React from "react";
import { useState } from 'react';
import Hours from "./locatorPage/Hours";
import OpenClose from "./commons/openClose";

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
  console.log(props);
  return (
<>
    <div className="flex mt-4 ml-4">
    <img className="h-[25px]" src={loc1} alt=""/>
    <p className="text-sm pl-4">{addline1},{addline2} <br/>
    {city},<br/>
        {postcode}</p>
</div>
{phone &&
<div className="flex mt-4 ml-4">
    <img className="h-[25px]" src={loc2} alt=""/>
    <p className="text-sm pl-4"><a id="address" className=" location-phn" href={`tel:${phone}`}>
                {phone}
              </a></p>

</div>
}
{hours && (
<div className="flex mt-4 ml-4">
    <img className="h-[25px]" src={loc3} alt=""/>
    <p className="text-sm pl-4"><div className="openClosestatus detail-page closeing-div">
                            <OpenClose timezone={timezone} hours={hours} />
                          </div> </p>
</div>
         
         )}
          
    
      
    </>
  
  );
};

export default locDetails;


