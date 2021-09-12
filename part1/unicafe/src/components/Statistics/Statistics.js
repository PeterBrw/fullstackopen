import React from 'react'
import StatisticLine from './StatisticLine/'

const Statistics = ({ clicks }) => {
	const all = clicks.good + clicks.neutral + clicks.bad

	if (all === 0) return <div>No feedback given</div>

	return (
		<>
			<table>
				<tbody>
					<StatisticLine text={'good'} value={clicks.good} />
					<StatisticLine text={'neutral'} value={clicks.neutral} />
					<StatisticLine text={'bad'} value={clicks.bad} />
					<StatisticLine text={'all'} value={all} />
					<StatisticLine
						text={'average'}
						value={(clicks.good * 1 + clicks.bad * -1) / all}
					/>
					<StatisticLine text={'positive'} value={(clicks.good * 100) / all + ' %'} />
				</tbody>
			</table>
		</>
	)
}

export default Statistics
