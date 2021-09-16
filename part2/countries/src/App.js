import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = (props) => {
	const [countries, setCountries] = useState([])
	const [filter, setFilter] = useState('')

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
			console.log(response.data)
			setCountries(response.data)
		})
	}, [])

	const handleFilterChange = (e) => setFilter(e.target.value)

	const countriesToShow = countries.filter((country) =>
		country.name.toLowerCase().includes(filter.toLowerCase())
	)

	const emptyFilter = <p>Look for a country</p>

	return (
		<div>
			filter shown with: <input onChange={handleFilterChange} />
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
				/>
			) : (
				countriesToShow.map((item) => <p key={item.alpha3Code}>{item.name}</p>)
			)}
		</div>
	)
}

export default App
