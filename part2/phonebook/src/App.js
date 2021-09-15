import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Number from './components/Number'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	])
	const [newName, setNewName] = useState('add a new name')
	const [newNumber, setNewNumber] = useState('add the number')
	const [filter, setFilter] = useState('')

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

		newPersons.push({ name: newName, number: newNumber, id: new Date() })
		setPersons(newPersons)
		setNewName('')
		setNewNumber('')
	}

	const handleNameChange = (e) => setNewName(e.target.value)
	const handleNumberChange = (e) => setNewNumber(e.target.value)
	const handleFilterChange = (e) => setFilter(e.target.value)

	return (
		<div>
			<Header text={'Phonebook'} />
			<div>
				filter shown with: <input onChange={handleFilterChange} />
			</div>
			<Header text={'add a new'} />
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
			{persons
				.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
				?.map((person, i) => (
					<Number key={person.id} name={person.name} number={person.number} />
				))}
		</div>
	)
}

export default App
