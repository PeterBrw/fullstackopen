import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function Country({ name, capital, population, languages, flag, handleCapitalChange, weather }) {

	React.useEffect(() => {
		handleCapitalChange(capital)
	})

	return (
		<div>
			<h1>{name}</h1>
			<p>capital {capital}</p>
			<p>population {population}</p>
			<h3>Spoken languages</h3>
			<ul>
				{languages.map((lan) => (
					<li key={uuidv4()}>{lan.name}</li>
				))}
			</ul>
			<img src={flag} width={100} haight={100} alt="country flag" />
			<h3>Weather in {capital}</h3>
			<p>
				<b>temperature: </b> {weather.current.temperature} Celsius
			</p>
			<img src={weather.current.weather_icons[0]} alt="weather icon" />
			<p>
				<b>wind: </b> {(weather.current.wind_speed / 1.609).toFixed(2)} mph direction{' '}
				{weather.current.wind_dir}
			</p>
		</div>
	)
}

export default Country
