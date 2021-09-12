import React, { useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Statistics from './components/Statistics'

const App = () => {
	const [clicks, setClicks] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	})

	const handleGoodClick = () => {
		setClicks({
			...clicks,
			good: clicks.good + 1,
		})
	}

	const handleNeutralClick = () => {
		setClicks({
			...clicks,
			neutral: clicks.neutral + 1,
		})
	}

	const handleBadClicks = () => {
		setClicks({
			...clicks,
			bad: clicks.bad + 1,
		})
	}

	return (
		<>
			<Header text={'give feedback'} />
			<Button text={'good'} onClick={handleGoodClick} />
			<Button text={'neutral'} onClick={handleNeutralClick} />
			<Button text={'bad'} onClick={handleBadClicks} />
			<Header text={"statistics"} />
			<Statistics clicks={clicks} />
		</>
	)
}

export default App
