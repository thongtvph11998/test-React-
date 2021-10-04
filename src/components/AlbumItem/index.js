import React from "react"
import { useHistory } from "react-router-dom"
import { currencyFormatter } from "../../helpers/currency"

const AlbumItem = ({ item, onDetail }) => {
	const history = useHistory()
	return (
		<div className='col'>
			<div className='card shadow-sm'>
				<img
					width='100%'
					height={225}
					src={item.image}
					className='bd-placeholder-img card-img-top'
				/>
				<div className='card-body'>
					<p className='card-text'>{item.name}</p>
					<div className='d-flex justify-content-between align-items-center'>
						<div className='btn-group'>
							<button type='button' className='btn btn-sm btn-outline-secondary'>
								<strike>{currencyFormatter.format(item.price)}</strike>{" "}
								<span className='text-danger'> {currencyFormatter.format(item.price_detail)}</span>
							</button>
							<button
								type='button'
								className='btn btn-sm btn-outline-secondary'
								onClick={() => {
									onDetail(item.id)
									history.push(`${item.id}`)
								}}
							>
								Detail
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AlbumItem
