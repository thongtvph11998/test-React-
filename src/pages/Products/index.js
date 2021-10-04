import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Albums from "../../components/Albums"

const ProductsPage = ({ albums, onHandleRemove, onHandleDetail }) => {
	const [listAlbums, setListAlbums] = useState(albums)
	const { search } = useLocation()
	const categoryId = new URLSearchParams(search).get("category")
	useEffect(() => {
		if (categoryId) {
			const result = albums.filter((album) => album.categoryId == categoryId)
			setListAlbums(result)
		}
	}, [categoryId])

	return (
		<div>
			<Albums data={listAlbums} onDelete={onHandleRemove} onDetail={onHandleDetail} />
		</div>
	)
}

export default ProductsPage
