import { useRef, useState } from 'react'

export const useUpdater = () => {
	const [parsedDataFirstFile, setParsedDataFirstFile] = useState([])
	const [parsedDataSecondFile, setParsedDataSecondFile] = useState([])
	const [parsedDataUpdated, setParsedDataUpdated] = useState([])

	const firstFileInput = useRef(null)
	const secondFileInput = useRef(null)

	return {
		parsedDataFirstFile,
		parsedDataSecondFile,
		parsedDataUpdated,
		setParsedDataFirstFile,
		setParsedDataSecondFile,
		setParsedDataUpdated,
		firstFileInput,
		secondFileInput,
	}
}
