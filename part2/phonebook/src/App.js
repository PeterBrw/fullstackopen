import React, { useState, useEffect } from 'react'
import { getAll, create, deleteAPerson } from '../src/services/persons'
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
		getAll()
			.then((initPersons) => setPersons(initPersons))
			.catch((error) => alert('Something went wrong with fetching data!'))
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

		create(newPerson)
			.then((personAdded) => {
				newPersons.push(personAdded)
				setPersons(newPersons)
				setNewName('')
				setNewNumber('')
			})
			.catch((error) => alert('Something went wrong with adding the person!'))
	}

	const deletePerson = (name, id) => {
		const result = window.confirm(`Delete ${name} ?`)

		if (result) {
			deleteAPerson(id)
				.then((response) => {
					setPersons(persons.filter((person) => person.id !== id))
				})
				.catch((error) => {
					alert('Something went wrong with deletion!')
				})
		}
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

			<Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
		</div>
	)
}

export default App
