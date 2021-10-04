import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API } from "../../api/constants"
import SibarMenu from "../sibarMenu"
const Categories = () => {
	const [categories, setCategories] = useState([])
	const loadCategories = useCallback(async () => {
		const { data } = await axios.get(`${API}/categories`)
		setCategories(data)
	}, [])
	useEffect(() => {
		loadCategories()
	}, [])
	const onDelete = async (id) => {
		const response = await fetch(`${API}/categories/${id}`, {
			method: "DELETE",
		})
		const newCate = categories.filter((item) => item.id != id)
		setCategories(newCate)
	}

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<nav id='sidebarMenu' className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'>
						<SibarMenu />
					</nav>
					<main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
						<div className='table-responsive' id='list-products'>
							<h2>Quản lý Categories</h2>

							<button type='button' className='btn btn-sm btn-outline-secondary'>
								<strong>
									{" "}
									<Link to={`categories/add`}>Add Category</Link>{" "}
								</strong>
							</button>

							<table className='table'>
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{" "}
									{categories.map((category, index) => {
										return (
											<tr key={index}>
												<td scope='row'>{index + 1}</td>
												<td>{category.name}</td>
												<td>
													<button
														type='button'
														className='btn btn-sm btn-outline-danger'
														onClick={() => {
															onDelete(category.id)
														}}
													>
														Delete
													</button>
													<button type='button' className='btn btn-sm btn-outline-primary'>
														<Link to={`categories/edit/${category.id}`}>Update</Link>
													</button>
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default Categories
