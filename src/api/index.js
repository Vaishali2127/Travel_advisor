import { type } from "@testing-library/user-event/dist/type";

var axios = require("axios").default;

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        "X-RapidAPI-Key": "c0be84b521msh9a97f7b5f03e78fp16f453jsne65801178eca",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
