import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('add a new name')
	const [newNumber, setNewNumber] = useState('add the number')
	const [filter, setFilter] = useState('')

	useEffect(() => {
		axios.get('http://localhost:3001/persons').then((response) => {
			setPersons(response.data)
		})
	}, [])

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

		const newPerson = { name: newName, number: newNumber }
		axios.post('http://localhost:3001/persons', newPerson)
			.then(response => {
				newPersons.push(response.data)
				setPersons(newPersons)
				setNewName('')
				setNewNumber('')
			})
	}

	const handleNameChange = (e) => setNewName(e.target.value)
	const handleNumberChange = (e) => setNewNumber(e.target.value)
	const handleFilterChange = (e) => setFilter(e.target.value)

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().includes(filter.toLowerCase())
	)

	return (
		<div>
			<Header text={'Phonebook'} />

			<Filter handleFilterChange={handleFilterChange} />

			<Header text={'add a new'} />

			<PersonForm
				addName={addName}
				newName={newName}
				handleNameChange={handleNameChange}
				setNewName={setNewName}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
				setNewNumber={setNewNumber}
			/>

			<Header text={'Numbers'} />

			<Persons filteredPersons={filteredPersons} />
		</div>
	)
}

export default App
