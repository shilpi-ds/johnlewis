export const stagingBaseurl = "https://main-malleably--funky--rodent-sbx-pgsdemo-com.sbx.preview.pagescdn.com/";

export const limit = 5;
export const radius = 500;
export const defaultQuery = "";
export const baseApiUrl = "https://liveapi-sandbox.yext.com/v2/accounts/me";
export const liveAPIKey = "b6c132c2e6ab41292910ce79d26739b4";
export const entityTypes = "location";
export const savedFilterId = "1133466060";
export const googleMapsConfig = {
  centerLatitude: 51.509865,
  centerLongitude: -0.118092,
  googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18",
};
export const AnalyticsEnableDebugging = true;
export const AnalyticsEnableTrackingCookie = true;
export const countrySavedFilterId = "dm_stores-directory_address_countrycode";
export const citySavedFilterId = "dm_stores-directory_address_city";
export const stateSavedFilterId = "dm_stores-directory_address_region";
export const rootSavedFilterId = "dm_stores-directory";
export function slugify(slugString:any){
  slugString.toLowerCase().toString();
  slugString = slugString.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/, "");
  slugString = slugString.replaceAll("  ", "-");
  slugString = slugString.replaceAll(" ", "-");
  slugString = slugString.replaceAll("---","-");
  slugString = slugString.replaceAll("--","-");
  slugString = slugString.replaceAll("'","");
  return slugString.toLowerCase();
};
export const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
export const defaultTimeZone = "Europe/London";
export const GoogleSearchConsole = { 
  name : "google-site-verification",
  content : "WIqhwAw2ugRAKEYRRqis1ZfUBbnWe_AXSoDltHceCbI"
}
export const AnswerExperienceConfig = {
  experienceKey: "john-lewis",
  locale: "en_GB",
  apiKey: "d584a98cfbe6ed5896efa0ffdc1d3619",
  verticalKey: "locations",
  experienceVersion: "STAGING",
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",
      geosearch:
"https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch",
  },
};
