import React from 'react'

const Anecdote = ({ anecdote, votes }) => {
	return (
		<div>
			{anecdote}
			<br />
			has {votes} votes
		</div>
	)
}

export default Anecdote
