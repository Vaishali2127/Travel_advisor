var axios = require("axios").default;

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

const options = {
  params: {
    latitude: "12.91285",
    longitude: "100.87808",
  },
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "86876c5448msh7a799bc1bbddd3fp1f39fajsne65d3b918fa9",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
