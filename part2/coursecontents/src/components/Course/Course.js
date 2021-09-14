import React from 'react'
import Header from '../Header'
import Content from '../Content/Content'

function Course({ course }) {
	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
		</>
	)
}

export default Course
