import React, { useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Anecdote from './components/Anecdote'

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
	]

	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

	const handleRandomClick = () => setSelected(Math.floor(Math.random() * anecdotes.length))

	const handleVoteClick = () => {
		const vote = points.map((item, index) => {
			if (index === selected) return ++item
			else return item
		})

		setPoints([...vote])
	}

	const getTheAnecdoteWithMostVotes = () => {
		const mostVotes = Math.max(...points)
		const indexMostVotes = points.indexOf(mostVotes)
		return {
			anecdote: anecdotes[indexMostVotes],
			votes: mostVotes,
		}
	}

	return (
		<div>
			<Header text={'Anecdote of the day'} />
			<Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
			<Button text={'vote'} onClick={handleVoteClick} />
			<Button text={'next anecdote'} onClick={handleRandomClick} />
			<Header text={'Anecdote with most votes'} />
			<Anecdote
				anecdote={getTheAnecdoteWithMostVotes().anecdote}
				votes={getTheAnecdoteWithMostVotes().votes}
			/>
		</div>
	)
}

export default App
