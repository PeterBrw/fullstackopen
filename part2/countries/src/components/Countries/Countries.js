import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function Countries({ countries, handleOnClick }) {
	return (
		<>
			{countries.map((item) => (
				<p key={uuidv4()}>
					{item.name} <button onClick={() => handleOnClick(item.name)}>show</button>
				</p>
			))}
		</>
	)
}

export default Countries
