import React from 'react'
import  ReactWeather,{ useOpenWeather } from 'react-open-weather'
import { openWeatherAPI } from '../../apiKeys'

const customStyles = {
	fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#02386e',
	gradientMid:  '#00498d',
	gradientEnd:  '#0052a2',
	locationFontColor:  '#FFF',
	todayTempFontColor:  '#FFF',
	todayDateFontColor:  '#B5DEF4',
	todayRangeFontColor:  '#B5DEF4',
	todayDescFontColor:  '#B5DEF4',
	todayInfoFontColor:  '#B5DEF4',
	todayIconColor:  '#FFF',
	forecastBackgroundColor:  '#FFF',
	forecastSeparatorColor:  '#DDD',
	forecastDateColor:  '#777',
	forecastDescColor:  '#777',
	forecastRangeColor:  '#777',
	forecastIconColor:  '#0052a2',
};

export const CurrentLocationWidget = ({lat, long, locationName}) => {

    const { data } = useOpenWeather({
        key: openWeatherAPI,
        lat: lat,
        lon: long,
        lang: 'en',
        unit: 'imperial', // values are (metric,imperial)
      });

  return (
    <div>
      <ReactWeather
        theme={customStyles}
        isLoading={lat === 0 ? true : false}
        data={data}
        lang="en"
        locationLabel={`${locationName.map((name) => {return name.name})}`}
        unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
      />
    </div>
  )
}
