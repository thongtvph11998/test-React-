import React from "react"
import { Button, Form, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
import CategoriesComponent from "../CategoriesComponent"
const Header = () => {
	return (
		<>
			<header>
				<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
					<div className='container-fluid'>
						<div className='collapse navbar-collapse' id='navbarSupportedContent'>
							<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
								<li className='nav-item'>
									<Link className='nav-link ' aria-current='page' to='/'>
										Home
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/product/list'>
										Products
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/contact'>
										Contact
									</Link>
								</li>
								<li className='nav-item '>
									<Link className='nav-link' to='/about'>
										About
									</Link>
								</li>
								<CategoriesComponent />
								<li className='nav-item ml-3'>
									<Form inline>
										<FormControl type='text' placeholder='Search' className='mr-sm-2' />
										<Button variant='outline-light'>Search</Button>
									</Form>
								</li>
							</ul>

							<Link className=' btn btn-outline-light' to='/manager'>
								admin
							</Link>
						</div>
					</div>
				</nav>
			</header>
		</>
	)
}
export default Header
