var axios = require("axios").default;

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        latitude: "12.91285",
        longitude: "100.87808",
        // bl_latitude: sw.lat,
        // tr_latitude: ne.lat,
        // bl_longitude: sw.lng,
        // tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "86876c5448msh7a799bc1bbddd3fp1f39fajsne65d3b918fa9",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
