import React from 'react'

function Notification({ message }) {
	if (message === null) {
		return null
	}

	return <div className="person-added">{message}</div>
}

export default Notification
