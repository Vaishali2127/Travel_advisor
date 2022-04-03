import { type } from "@testing-library/user-event/dist/type";

var axios = require("axios").default;

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key":
            "1bf9ab39camshe0601c82346a034p1c0d40jsnc4c7d68955c0",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
