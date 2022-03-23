var axios = require("axios").default;

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        latitude: "12.91285",
        longitude: "100.87808",
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "12ee02438amshc99c027ca508a21p135318jsn61b99d21d256",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
