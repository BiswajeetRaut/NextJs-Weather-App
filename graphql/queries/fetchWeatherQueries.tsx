import { gql, useQuery } from '@apollo/client';

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "apparent_temperature_max,apparent_temperature_min,sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_clear_sky_max,uv_index_max,weathercode"
    $hourly: String = "apparent_temperature,windgusts_10m,weathercode,uv_index_clear_sky,uv_index,temperature_2m,snowfall,snow_depth,showers,rain,precipitation_probability,precipitation,relativehumidity_2m"
    $latitude: String!
    $longitude: String!
    $past_days: String
    $timezone: String!

  ){
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      past_days: $past_days
      timezone: $timezone
    ) {
      elevation
      generationtime_ms
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      hourly {
        apparent_temperature
        windgusts_10m
        weathercode
        uv_index_clear_sky
        uv_index
        temperature_2m
        snowfall
        snow_depth
        showers
        rain
        precipitation_probability
        precipitation
        time
        relativehumidity_2m
      }
      hourly_units {
        apparent_temperature
        cloudcover_high
        cloudcover_low
        cloudcover_mid
        dewpoint_2m
        is_day
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        temperature_80m
        time
        uv_index
        uv_index_clear_sky
        visibility
        weathercode
        windgusts_10m
        windspeed_10m
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        windspeed_10m_max
        windgusts_10m_max
        weathercode
        uv_index_max
        uv_index_clear_sky_max
      }
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
    }
  }
`;
export default fetchWeatherQuery;