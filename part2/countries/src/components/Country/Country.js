import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function Country({ name, capital, population, languages, flag }) {
	return (
		<div>
			<h1>{name}</h1>
			<p>capital {capital}</p>
			<p>population {population}</p>
			<h3>languages</h3>
			<ul>
				{languages.map((lan) => (
					<li key={uuidv4()}>{lan.name}</li>
				))}
			</ul>
			<img src={flag} width={100} haight={100} alt="country flag"/>
		</div>
	)
}

export default Country
