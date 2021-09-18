import React from 'react'

function Person({ name, number, id, deletePerson }) {
	return (
		<>
			<p>
				{name} {number} <button onClick={() => deletePerson(name, id)}>delete</button>
			</p>
		</>
	)
}

export default Person
