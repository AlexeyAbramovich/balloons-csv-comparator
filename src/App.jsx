import Papa from 'papaparse'
import DownloadButton from './components/DownloadButton'
import Input from './components/Input'
import UpdateButton from './components/UpdateButton'
import { useUpdater } from './useUpdater'

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

	const handleClick = () => {
		const parsedFileUpdatedCopy = Array.from(parsedDataFirstFile)
		if (parsedDataFirstFile.length !== 0 && parsedDataSecondFile.length !== 0) {
			console.log('Артикул ---- Было - Стало')
			parsedFileUpdatedCopy.forEach(record => {
				parsedDataSecondFile.forEach(rec => {
					if (
						record['Артикул'] &&
						rec['Артикул'] &&
						record['Артикул'] === rec['Артикул']
					) {
						console.log(
							`${record['Артикул']} ---- ${record['Остаток']} - ${Number(
								rec['Остаток по складу'].replace(',', '.')
							)}`
						)
						record['Остаток'] = Number(
							rec['Остаток по складу'].replace(',', '.')
						)
					}
				})
			})
			setParsedDataUpdated(parsedFileUpdatedCopy)
		}
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
			<UpdateButton
				parsedDataFirstFile={parsedDataFirstFile}
				parsedDataSecondFile={parsedDataSecondFile}
				handleClick={handleClick}
			/>
			<DownloadButton
				parsedDataUpdated={parsedDataUpdated}
				handleResetClick={handleResetClick}
			/>
		</>
	)
}

export default App
