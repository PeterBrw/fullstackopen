import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Number from './components/Number'

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
	const [newName, setNewName] = useState('add a new name')

	const addName = (e) => {
		e.preventDefault()
		const newPersons = [...persons]
		newPersons.push({ name: newName })
		setPersons(newPersons)
		setNewName('')
	}

	const handleNameChange = (e) => setNewName(e.target.value)

	return (
		<div>
			<Header text={'Phonebook'} />
			<Form addName={addName} newName={newName} handleNameChange={handleNameChange} />
			<Header text={'Numbers'} />
			{persons.map((person, i) => (
				<Number key={person.name} name={person.name} />
			))}
		</div>
	)
}

export default App