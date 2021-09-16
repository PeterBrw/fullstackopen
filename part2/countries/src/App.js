import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Countries from './components/Counties'
const api_key = process.env.REACT_APP_API_KEY

const App = (props) => {
	const [countries, setCountries] = useState([])
	const [filter, setFilter] = useState('')
	const [capital, setCapital] = useState('London')
	const [weather, setWeather] = useState([])

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
			setCountries(response.data)
		})
	}, [])

	useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
			.then((response) => {
				console.log(response)
				setWeather(response.data)
			})
	}, [capital])

	const handleFilterChange = (e) => setFilter(e.target.value)

	const countriesToShow = countries.filter((country) =>
		country.name.toLowerCase().includes(filter.toLowerCase())
	)

	const emptyFilter = <p>Look for a country</p>

	const handleOnClick = (name) => {
		setFilter(name)
	}

	const handleCapitalChange = (capital) => setCapital(capital)
	console.log(weather)
	return (
		<div>
			filter shown with: <input value={filter || ''} onChange={handleFilterChange} />
			{filter === '' ? (
				emptyFilter
			) : countriesToShow.length > 10 ? (
				<p>Too many matches, specify another filter</p>
			) : countriesToShow.length === 1 ? (
				<Country
					name={countriesToShow[0].name}
					capital={countriesToShow[0].capital}
					population={countriesToShow[0].population}
					languages={countriesToShow[0].languages}
					flag={countriesToShow[0].flag}
					handleCapitalChange={handleCapitalChange}
					weather={weather}
				/>
			) : (
				<Countries countries={countriesToShow} handleOnClick={handleOnClick} />
			)}
		</div>
	)
}

export default App
