import React from 'react'

const UpdateButton = ({
	parsedDataFirstFile,
	parsedDataSecondFile,
	handleClick,
}) => {
	return (
		<button
			disabled={
				parsedDataFirstFile.length === 0 || parsedDataSecondFile.length === 0
			}
			onClick={() => handleClick()}
		>
			Обновить остатки
		</button>
	)
}

export default UpdateButton
