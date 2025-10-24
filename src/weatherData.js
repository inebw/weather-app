export default function getWeatherData(city, isMetric = true) {
  async function getResponse() {
    try {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?unitGroup=${isMetric ? "metric" : "us"}&key=B6R534KWXENLU4HLSU9AP6VCR&contentType=json`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const weatherData = await response.json();
      return weatherData;
    } catch (err) {
      console.log(err);
    }
  }
  return getResponse();
}
