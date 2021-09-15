import React from 'react'

function Form({ addName, newName, handleNameChange }) {
	return (
		<>
			<form onSubmit={addName}>
				<div>
					name: <input value={newName} onChange={handleNameChange}/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	)
}

export default Form