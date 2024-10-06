import Papa from 'papaparse'
import DownloadButton from './components/DownloadButton'
import Input from './components/Input'
import { useUpdater } from './useUpdater'
import { useUpdateRest } from './useUpdateRest'

function App() {
	const {
		parsedDataFirstFile,
		parsedDataSecondFile,
		parsedDataUpdated,
		setParsedDataFirstFile,
		setParsedDataSecondFile,
		setParsedDataUpdated,
		firstFileInput,
		secondFileInput,
	} = useUpdater()

	useUpdateRest(parsedDataFirstFile, parsedDataSecondFile, setParsedDataUpdated)

	const onChangeHandler = event => {
		Papa.parse(event.target.files[0], {
			header: true,
			skipEmptyLines: true,
			complete: function (results) {
				if (results.data.length !== 0) {
					if (results.data[0].hasOwnProperty('Товар')) {
						setParsedDataSecondFile(results.data)
					} else {
						setParsedDataFirstFile(results.data)
					}
				}
			},
		})
	}

	const handleResetClick = () => {
		if (firstFileInput.current && secondFileInput.current) {
			firstFileInput.current.value = null
			secondFileInput.current.value = null
			setParsedDataFirstFile([])
			setParsedDataSecondFile([])
			setParsedDataUpdated([])
		}
	}

	return (
		<>
			<h2>Обновление остатков CSV</h2>
			<Input reference={firstFileInput} onChangeHandler={onChangeHandler} />
			<Input reference={secondFileInput} onChangeHandler={onChangeHandler} />
			<DownloadButton
				parsedDataUpdated={parsedDataUpdated}
				handleResetClick={handleResetClick}
			/>
		</>
	)
}

export default App
