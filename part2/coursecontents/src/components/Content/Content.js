import React from 'react'
import Part from '../Part'
import Total from '../Total'

function Content({ parts }) {
	let total = 0
	
	return (
		<>
			{parts.map((part) => {
				total += part.exercises
				return <Part name={part.name} exercises={part.exercises} key={part.id} />
			})}
			<Total total={total} />
		</>
	)
}

export default Content
