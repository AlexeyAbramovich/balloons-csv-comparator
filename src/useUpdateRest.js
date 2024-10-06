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
	}, [parsedDataFirstFile, parsedDataSecondFile])
}
