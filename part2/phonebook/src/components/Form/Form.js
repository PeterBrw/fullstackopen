import React from 'react'

function Form({
	addName,
	newName,
	handleNameChange,
	setNewName,
	newNumber,
	handleNumberChange,
	setNewNumber,
}) {
	return (
		<>
			<form onSubmit={addName}>
				<div>
					name:{' '}
					<input
						value={newName}
						onChange={handleNameChange}
						onFocus={() => setNewName('')}
					/>
				</div>
				<div>
					number:{' '}
					<input
						value={newNumber}
						onChange={handleNumberChange}
						onFocus={() => setNewNumber('')}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	)
}

export default Form
