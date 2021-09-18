import React from 'react'
import Person from '../Person'

function Persons({ filteredPersons, deletePerson }) {
	return (
		<>
			{filteredPersons.map((person) => (
				<Person
					key={person.id}
					name={person.name}
					number={person.number}
					id={person.id}
					deletePerson={deletePerson}
				/>
			))}
		</>
	)
}

export default Persons
