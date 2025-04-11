const weatherApiUrl = "http://api.weatherapi.com/v1/";
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const getWeather = async (location) => {
  try {
    const weatherApiReq = await fetch(
      `${weatherApiUrl}current.json?key=${weatherApiKey}&q=${location}&aqi=no`
    );
    const weatherData = await weatherApiReq.json();
    if (weatherData.error) return weatherData.error
    return weatherData;
  } catch (error) {
    console.error(error)
  }
};

export default getWeather;
