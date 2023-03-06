import * as React from "react";
import Geocode from "react-geocode";
import { useSearchActions } from "@yext/search-headless-react";
import { ChangeEvent, KeyboardEvent, useCallback } from "react";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import {svgIcons} from "../../images/svg-icons/svgIcon";


export default function UseMyLocation(){
    const[query,setquery]=React.useState('');
    var Api="AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";
    const geoclick=()=>{
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        Geocode.setApiKey(Api);
        Geocode.fromLatLng(position.coords.latitude,position.coords.longitude).then(
          (response:any) => {
            if (response.results[0]) {
              console.log(response.results[0].formatted_address);
              setquery(response.results[0].formatted_address)

          }
        },
          (error:any) => {
            console.error(error);
          }
        );
      })
  
    }
    const search = useSearchActions();
    const handleTyping=()=>{
        search.setVertical(query);
      console.log(search)
}
    return(
        <>
        
        <button
              className="font-nexa_boldregular relative search-location-arrow text-[#024B58] text-xs sm:text-sm"
              title="Search using your current location!"
              id="useLocation"
              onClick={handleTyping}
            >
            {svgIcons.usemylocjohn}
             UseMyLocation
            </button>
            
         
        </>
    )
}

function usestate(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
