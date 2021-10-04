import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API } from "../../api/constants"
import { currencyFormatter } from "../../helpers/currency"

const ProductDetail = () => {
	let { id } = useParams()
	const [albumItem, setAlbumItem] = useState({})

	useEffect(() => {
		const onHandleDetail = async () => {
			try {
				await fetch(`${API}/products/${id}`).then(async (response) => {
					const data = await response.json()
					console.log(data)
					setAlbumItem(data)
				})
			} catch (error) {
				console.log(error)
			}
		}
		onHandleDetail()
		console.log("Item: ", albumItem)
	}, [])
	return (
		<div>
			<h2 align='center'>Chi tiết sản phẩm</h2>
			<br />
			<div className='row col-sm-12'>
				<div className='col-7'>
					<img src={albumItem.image} width='80%' />
				</div>
				<div className='col-5'>
					<strong>
						Tên Sản Phẩm:<h4 className='text-primary'>{albumItem.name} </h4>
					</strong>
					<br />
					<strong>
						{" "}
						Mô tả:<h4 className='text-primary'> {albumItem.desc}</h4>
					</strong>
					<br />
					<strong>
						Giá:
						<h4>
							<strike className='text-primary'>{currencyFormatter.format(albumItem.price)}</strike>
							{currencyFormatter.format(albumItem.price_detail)}
						</h4>
					</strong>{" "}
					<strong>
						{" "}
						Trạng thái :
						<h4 className={albumItem.status ? "text-primary" : "text-danger"}>
							{albumItem.status ? "Còn hàng" : "Hết hàng"}
						</h4>
					</strong>
					<br />
					<br />
					<button type='button' className='btn btn-primary'>
						Mua hàng
					</button>
				</div>
			</div>
			<br />
			<div>
				<h3>Sản phẩm liên quan</h3>
			</div>{" "}
			<br />
			<div className='row col-sm-12'></div>
		</div>
	)
}

export default ProductDetail
