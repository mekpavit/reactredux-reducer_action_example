export function changeWeather(city) {
  return {
    type: 'CHANGE_WEATHER',
    payload: city
  }
}
