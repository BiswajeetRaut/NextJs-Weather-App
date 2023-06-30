interface CurrentWeather {
    is_day: number
    temperature: number
    time: string
    weathercode: number
    winddirection: number
    windspeed: number
}
interface Daily {
    apparent_temperature_max: [number]
    apparent_temperature_min: [number]
    precipitation_sum: [number]
    rain_sum: [number]
    showers_sum: [number]
    snowfall_sum: [number]
    sunrise: [string]
    sunset: [string]
    temperature_2m_max: [number]
    temperature_2m_min: [number]
    time: [string]
    uv_index_clear_sky_max: [number]
    uv_index_max: [number]
    weathercode: [number]
    windgusts_10m_max: [number]
    windspeed_10m_max: [number]
}
interface DailyUnits {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_sum: string;
    rain_sum: string;
    showers_sum: string;
    snowfall_sum: string;
    sunrise: string;
    sunset: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    uv_index_clear_sky_max: string;
    uv_index_max: string;
    weathercode: string;
    windgusts_10m_max: string;
    windspeed_10m_max: string;
}
interface Hourly {
    apparent_temperature: [number]
    cloudcover_high: [number]
    cloudcover_low: [number]
    cloudcover_mid: [number]
    dewpoint_2m: [number]
    is_day: [number]
    precipitation: [number]
    precipitation_probability: [number]
    rain: [number]
    relativehumidity_2m: [number]
    showers: [number]
    snow_depth: [number]
    snowfall: [number]
    temperature_2m: [number]
    temperature_80m: [number]
    time: [DateTime]
    uv_index: [number]
    uv_index_clear_sky: [number]
    visibility: [number]
    weathercode: [number]
    windgusts_10m: [number]
    windspeed_10m: [number]
}
interface HourlyUnits {
    apparent_temperature: string;
    cloudcover_high: string;
    cloudcover_low: string;
    cloudcover_mid: string;
    dewpoint_2m: string;
    is_day: string;
    precipitation: string;
    precipitation_probability: string;
    rain: string;
    relativehumidity_2m: string;
    showers: string;
    snow_depth: string;
    snowfall: string;
    temperature_2m: string;
    temperature_80m: string;
    time: string;
    uv_index: string;
    uv_index_clear_sky: string;
    visibility: string;
    weathercode: string;
    windgusts_10m: string;
    windspeed_10m: string;
}
interface Root {
    current_weather: CurrentWeather
    daily: Daily
    daily_units: DailyUnits
    elevation: number
    generationtime_ms: number
    hourly: Hourly
    hourly_units: HourlyUnits
    latitude: number
    longitude: number
    timezone: string
    timezone_abbreviation: string
    utc_offset_seconds: number
  }