import React from 'react'

const Info = () => {
	return (
		<div className='wrapper_info'>
			<h2>Инструкция</h2>
			<p>
				1. Для программы потребуется два файла формата .csv Первый файл
				скачивается с InSales пример:{' '}
				<span>shop_products_prices_and_stocks-03.10.2024.csv</span>
			</p>
			<p>
				2. Второй файл будет примерно такой{' '}
				<span>остатки цифры 26 03.10.24.xls</span> Он формата .xls и его нужно
				преобразовать в .csv Для этого заходим на сайт{' '}
				<a href='https://convertio.co/ru/xls-csv/' target='blank'>
					Convertio
				</a>{' '}
				закидываем этот файл, нажимаем конвертировать и далее скачать.
			</p>
			<p>3. Далее закидываем два файла сюда и нажимаем кнопку Export CSV</p>
			<p>
				4. Открываем файл{' '}
				<span>shop_products_prices_and_stocks-03.10.2024.csv</span> и файл
				который получился <span>обновленные_остатки_07.10.2024.csv</span> в
				программе редакторе
			</p>
			<p>
				5. Копируем столбец "Остатки" из файла{' '}
				<span>обновленные_остатки_07.10.2024.csv</span> и вставляем вместо
				столбца "Остатки" в файле{' '}
				<span>shop_products_prices_and_stocks-03.10.2024.csv</span>
			</p>
			<p>
				6. Загружаем файл{' '}
				<span>shop_products_prices_and_stocks-03.10.2024.csv</span> обратно на
				InSales
			</p>
		</div>
	)
}

export default Info
