import React from 'react'

function Country({ name, capital, population, languages, flag }) {
	return (
		<div>
			<h1>{name}</h1>
			<p>capital {capital}</p>
			<p>population {population}</p>
			<h3>languages</h3>
			<ul>
				{languages.map((lan, i) => (
					<li key={i}>{lan.name}</li>
				))}
			</ul>
			<img src={flag} width={100} haight={100} />
		</div>
	)
}

export default Country
