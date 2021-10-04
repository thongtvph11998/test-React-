import React from "react"
import { Link } from "react-router-dom"
const SibarMenu = () => {
	return (
		<div>
			<div className='position-sticky pt-3'>
				<ul className='nav flex-column'>
					<li className='nav-item'>
						<a className='nav-link active' aria-current='page' href='#'>
							<span data-feather='home' />
							Dashboard
						</a>
					</li>
					<li className='nav-item'>
						<Link to={`manager`} className='nav-link'>
							<span data-feather='shopping-cart' />
							Products
						</Link>

						<Link className='nav-link' to={`categories`}>
							<span data-feather='shopping-cart' />
							Category
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SibarMenu
