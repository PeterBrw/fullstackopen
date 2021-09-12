import React from 'react'
import StatisticLine from './StatisticLine/'

const Statistics = ({ clicks }) => {
	return (
		<>
			<StatisticLine text={"good"} numberOfClicks={clicks.good} />
			<StatisticLine text={"neutral"} numberOfClicks={clicks.neutral} />
			<StatisticLine text={"bad"} numberOfClicks={clicks.bad} />
		</>
	)
}

export default Statistics
