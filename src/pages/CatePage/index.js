import React, { useCallback, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { API } from "../../api/constants"
import { currencyFormatter } from "../../helpers/currency"
const CatePage = () => {
	console.log("Cate page")
	let history = useHistory()
	const params = useParams()
	console.log(params)
	const { id } = params
	const [categories, setCategories] = useState([])
	const [products, setproducts] = useState()

	const loadCategories = async () => {
		try {
			const response = await fetch(`${API}/categories/${id}`)
			const cate = await response.json()
			setCategories(cate)
		} catch (error) {
			console.log(error)
		}
	}

	const loadProducts = useCallback(async () => {
		const response = await fetch(`${API}/products${id ? `categoryId=${id}` : ""}`)
		const products = await response.json()
		setproducts(products)
		console.log("Products: ", products)
	}, [id])
	const onDetail = async (id) => {
		try {
			const response = await fetch(`${API}/products/${id}`)
			const products = await response.json()
			setproducts(products)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		loadCategories()
		loadProducts()
	}, [id])
	return (
		<div>
			{products.map((product, index) => (
				<div className='col' key={index}>
					<div className='card shadow-sm'>
						<img
							width='100%'
							height={225}
							src={product.image}
							className='bd-placeholder-img card-img-top'
						/>
						<div className='card-body'>
							<p className='card-text'>{product.name}</p>
							<div className='d-flex justify-content-between align-products-center'>
								<div className='btn-group'>
									<button type='button' className='btn btn-sm btn-outline-secondary'>
										<strike>{currencyFormatter.format(product.price)}</strike>{" "}
										<span className='text-danger'>
											{" "}
											{currencyFormatter.format(product.price_detail)}
										</span>
									</button>
									<button
										type='button'
										className='btn btn-sm btn-outline-secondary'
										onClick={() => {
											onDetail(product.id)
											history.push(`product/${product.id}`)
										}}
									>
										Detail
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CatePage
