import React, { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { API } from "../../api/constants"

const CategoriesComponent = () => {
	const [categories, setCategories] = useState([])
	const loadCategories = async () => {
		try {
			const response = await fetch(`${API}/categories`)
			const cate = await response.json()
			setCategories(cate)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		loadCategories()
	}, [])
	return (
		<Dropdown>
			<Dropdown.Toggle variant='outline-light' id='dropdown-basic'>
				Category
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{categories.map((category, index) => (
					<Dropdown.Item key={index} as='button'>
						<Link to={`/product/list?category=${category.id}`}>{category.name}</Link>
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default CategoriesComponent
