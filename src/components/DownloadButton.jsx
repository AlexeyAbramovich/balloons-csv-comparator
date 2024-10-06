import React from 'react'
import CsvDownloader from 'react-csv-downloader'

const DownloadButton = ({ parsedDataUpdated, handleResetClick }) => {
	const date = new Date()
	const day = date.getDate().toString().padStart(2, '0')
	const month = (date.getMonth() + 1).toString().padStart(2, '0')
	const year = date.getFullYear()

	return (
		<CsvDownloader
			datas={parsedDataUpdated}
			filename={`обновленные_остатки_${day}.${month}.${year}`}
			extension='.csv'
			separator={`;`}
		>
			<button
				disabled={parsedDataUpdated.length === 0}
				onClick={() => handleResetClick()}
			>
				Export CSV
			</button>
		</CsvDownloader>
	)
}

export default DownloadButton
