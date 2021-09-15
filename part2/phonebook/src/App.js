import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Number from './components/Number'

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }])
	const [newName, setNewName] = useState('add a new name')
	const [newNumber, setNewNumber] = useState('add the number')

	const addName = (e) => {
		e.preventDefault()
		const newPersons = [...persons]

		let exists = false

		newPersons.forEach((person) => {
			if (person.name === newName) {
				exists = true
			}
		})

		if (exists) {
			alert(`${newName} is already added to phonebook`)
			setNewName('')
			return
		}

		if (newName === '' || newNumber === '') {
			alert('Add data in both inputs')
			setNewName('')
			setNewNumber('')
			return
		}

		newPersons.push({ name: newName, number: newNumber })
		setPersons(newPersons)
		setNewName('')
		setNewNumber('')
	}

	const handleNameChange = (e) => setNewName(e.target.value)
	const handleNumberChange = (e) => setNewNumber(e.target.value)

	return (
		<div>
			<Header text={'Phonebook'} />
			<Form
				addName={addName}
				newName={newName}
				handleNameChange={handleNameChange}
				setNewName={setNewName}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
				setNewNumber={setNewNumber}
			/>
			<Header text={'Numbers'} />
			{persons.map((person, i) => (
				<Number key={person.name} name={person.name} number={person.number} />
			))}
		</div>
	)
}

export default App
