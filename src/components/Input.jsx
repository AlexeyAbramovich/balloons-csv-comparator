import React from 'react'

const Input = ({ reference, onChangeHandler }) => {
	return (
		<input
			ref={reference}
			type='file'
			name='file'
			onChange={onChangeHandler}
			accept='.csv'
		/>
	)
}

export default Input
