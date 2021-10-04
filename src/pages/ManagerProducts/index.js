import React from "react"
import { Link } from "react-router-dom"
import { currencyFormatter } from "../../helpers/currency"
import SibarMenu from "../sibarMenu"
const ManagerProducts = ({ albums, onDelete }) => {
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<nav id='sidebarMenu' className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'>
						<SibarMenu />
					</nav>
					<main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
						<div className='table-responsive' id='list-products'>
							<h2>Quản lý sản phẩm</h2>

							<button type='button' className='btn btn-sm btn-outline-secondary'>
								<strong>
									{" "}
									<Link to={`manager/add`}>Add Product</Link>{" "}
								</strong>
							</button>

							<table className='table'>
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Image</th>
										<th>Price</th>
										<th> Status</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{albums.map((album, index) => {
										return (
											<tr key={index}>
												<td scope='row'>{index + 1}</td>
												<td>{album.name}</td>
												<td>
													<img src={album.image} width='100' />
												</td>
												<td>{currencyFormatter.format(album.price)}</td>
												<td className={album.status ? "text-primary" : "text-danger"}>
													{album.status ? "Còn hàng" : "Hết hàng"}
												</td>
												<td>
													<button
														type='button'
														className='btn btn-sm btn-outline-danger'
														onClick={() => onDelete(album.id)}
													>
														Delete
													</button>
													<button type='button' className='btn btn-sm btn-outline-primary'>
														<Link to={`manager/edit/${album.id}`}>Update</Link>
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

export default ManagerProducts
