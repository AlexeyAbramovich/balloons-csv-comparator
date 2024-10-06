import React from 'react'
import CsvDownloader from 'react-csv-downloader'

const DownloadButton = ({ parsedDataUpdated, handleResetClick }) => {
	return (
		<CsvDownloader
			datas={parsedDataUpdated}
			filename='обновленные_остатки'
			extension='.csv'
			separator=';'
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
