import React from 'react'
import Person from '../Person'

function Persons({ filteredPersons }) {
	return (
		<>
			{filteredPersons.map((person, i) => (
				<Person key={person.id} name={person.name} number={person.number} />
			))}
		</>
	)
}

export default Persons