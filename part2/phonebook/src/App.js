import React, { useState, useEffect } from 'react'
import { getAll, create, deleteAPerson, update } from '../src/services/persons'
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('add a new name')
	const [newNumber, setNewNumber] = useState('add the number')
	const [filter, setFilter] = useState('')
	const [notificationMessage, setNotificationMessage] = useState(null)
	const [error, setError] = useState(false)

	useEffect(() => {
		getAll()
			.then((initPersons) => setPersons(initPersons))
			.catch((error) => alert('Something went wrong with fetching data!'))
	}, [])

	const addName = (e) => {
		e.preventDefault()
		const newPersons = [...persons]

		let existsPerson = {}

		newPersons.forEach((person) => {
			if (person.name.toLowerCase() === newName.toLowerCase()) {
				existsPerson = {
					...person,
					number: newNumber,
					exists: true,
				}
			}
		})

		if (existsPerson.exists) {
			const result = window.confirm(`${existsPerson.name} is already added to the phonebook, replace the old number with a new one?`)
			if(result) {
				update(existsPerson.id, {
					name: existsPerson.name,
					number: existsPerson.number,
				})
					.then((returnedPerson) => {
						setPersons(
							persons.map((person) =>
								person.id !== existsPerson.id ? person : returnedPerson
							)
						)
						setNotificationMessage(`Number of  ${returnedPerson.name} was changed!`)
						setNewName('')
						setNewNumber('')
						setTimeout(() => {
							setNotificationMessage(null)
						}, 5000)
					})
					.catch((error) =>
						alert('Something went wrong when you want to replace the number!')
					)
			}
			setNewName('')
			setNewNumber('')
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
				setNotificationMessage(`Added ${personAdded.name}`)
				setNewName('')
				setNewNumber('')
				setTimeout(() => {
					setNotificationMessage(null)
				}, 5000)
			})
			.catch((error) => alert('Something went wrong with adding the person!'))
	}

	const deletePerson = (name, id) => {
		const result = window.confirm(`Delete ${name} ?`)

		if (result) {
			deleteAPerson(id)
				.then((response) => {
					setPersons(persons.filter((person) => person.id !== id))
					setNotificationMessage(`${name} has been removed with success`)
					setError(true)
					setTimeout(() => {
						setNotificationMessage(null)
						setError(false)
					}, 5000)
				})
				.catch((error) => {
					setNotificationMessage(`Information of  ${name} has already been removed from server`)
					setPersons(persons.filter((person) => person.id !== id))
					setError(true)
					setTimeout(() => {
						setNotificationMessage(null)
						setError(false)
					}, 5000)
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
			<Notification message={notificationMessage} error={error} />
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
