import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom"
import { API } from "./api/constants"
import "./App.css"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import AddCate from "./pages/AddCate"
import AddPage from "./pages/AddPage"
import Categories from "./pages/CateAdmin"
import Contact from "./pages/Contact"
import EditPage from "./pages/EditPage"
import Homepage from "./pages/Homepage"
import ManagerProducts from "./pages/ManagerProducts"
import ProductDetail from "./pages/ProductDetail"
import ProductsPage from "./pages/Products"
import UpdateCate from "./pages/UpdateCate"
// const initialState =
function App() {
	const [albums, setAlbums] = useState([])
	const [albumItem, setAlbumItem] = useState({})
	const history = useHistory()

	useEffect(() => {
		const getAlbums = async () => {
			try {
				const response = await fetch(`${API}/products`)
				const data = await response.json()
				setAlbums(data)
				console.log("Data: ", data)
			} catch (error) {
				console.log(error)
			}
		}
		getAlbums()
	}, [])

	const onHandleAdd = async (album) => {
		try {
			const response = await fetch(`${API}/products`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(album),
			})
			const data = await response.json()
			// Sau khi thêm thành công vào API thì render lại state
			setAlbums([...albums, data])
		} catch (error) {
			console.log(error)
		}
	}
	const onHandleRemove = async (id) => {
		try {
			await fetch(`${API}/products/${id}`, {
				method: "DELETE",
			})
			const newAlbum = albums.filter((item) => item.id != id)
			setAlbums(newAlbum)
		} catch (error) {
			console.log(error)
		}
	}
	const onHandleDetail = async (id) => {
		try {
			const response = await fetch(`${API}/products/${id}`)
			const data = await response.json()
			setAlbumItem(data)
		} catch (error) {
			console.log(error)
		}
	}
	const onHandUpdate = async (album) => {
		try {
			await fetch(`${API}/products/${album.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(album),
			})
			const newAlbums = albums.map((pro) => (pro.id === album.id ? album : pro))
			setAlbums(newAlbums)
			// setAlbumItem(data);
		} catch (error) {
			console.log(error)
		}
	}
	const PATH_ROUTES = {
		CONTACT: "/contact",
		PRODUCT: {
			LIST: "/product/list",
			DETAIL: "/product/:id",
		},
	}
	return (
		<Router>
			<div className='container'>
				<Header />
				<Banner />
				<main>
					<Switch>
						<Route
							path='/'
							exact
							component={() => (
								<Homepage
									albums={albums}
									onHandleRemove={onHandleRemove}
									onHandleDetail={onHandleDetail}
								/>
							)}
						/>
						<Route
							path={PATH_ROUTES.PRODUCT.LIST}
							exact
							component={() => (
								<ProductsPage
									albums={albums}
									onHandleRemove={onHandleRemove}
									onHandleDetail={onHandleDetail}
								/>
							)}
						/>
						<Route path={PATH_ROUTES.PRODUCT.DETAIL} exact component={ProductDetail} />
						<Route
							path='/manager'
							exact
							component={() => <ManagerProducts albums={albums} onDelete={onHandleRemove} />}
						/>
						<Route path='/manager/add' exact component={() => <AddPage onAdd={onHandleAdd} />} />
						<Route
							path='/manager/edit/:id'
							exact
							component={() => <EditPage albums={albums} onUpdate={onHandUpdate} />}
						/>
						<Route path={`${PATH_ROUTES.CONTACT}`} exact component={() => <Contact />} />
						<Route path='/about' exact component={() => <About />} />
						<Route path='/categories' exact component={() => <Categories />}></Route>
						<Route path='/categories/add' exact component={() => <AddCate />}></Route>
						<Route path='/categories/edit/:id' exact component={() => <UpdateCate />}></Route>
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	)
}

export default App
