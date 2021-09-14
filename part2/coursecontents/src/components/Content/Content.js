import React from 'react'
import Part from '../Part'
import Total from '../Total'

function Content({ parts }) {
	const total = parts.reduce((sum, part) => sum + part.exercises, 0)
	return (
		<>
			{parts.map((part) => (
				<Part name={part.name} exercises={part.exercises} key={part.id} />
			))}
			<Total total={total}/>
		</>
	)
}

export default Content
