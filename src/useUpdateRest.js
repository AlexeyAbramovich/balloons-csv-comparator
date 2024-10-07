import { useEffect } from 'react'

export const useUpdateRest = (
	parsedDataFirstFile,
	parsedDataSecondFile,
	setParsedDataUpdated
) => {
	useEffect(() => {
		if (parsedDataFirstFile.length !== 0 && parsedDataSecondFile.length !== 0) {
			const parsedFileUpdatedCopy = Array.from(parsedDataFirstFile)
			console.log('Артикул ---- Было - Стало')
			parsedFileUpdatedCopy.forEach(record => {
				parsedDataSecondFile.forEach(rec => {
					if (
						record['Артикул'] &&
						rec['Артикул'] &&
						record['Артикул'] === rec['Артикул']
					) {
						const store = +rec['Остаток по складу'].replace(',', '.')

						console.log(
							`${record['Артикул']} ---- ${record['Остаток']} - ${
								store === 0.01 ? '0.01(0)' : store
							}`
						)

						record['Остаток'] = store === 0.01 ? 0 : store
					}
				})
			})
			setParsedDataUpdated(parsedFileUpdatedCopy)
		}
	}, [parsedDataFirstFile, parsedDataSecondFile])
}
