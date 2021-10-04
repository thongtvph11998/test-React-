import React from "react"
import { useParams } from "react-router-dom"
import UpdateAlbum from "../../components/UpdateAlbum"

const EditPage = ({ albums, onUpdate }) => {
	const { id } = useParams()
	const album = albums.find((item) => item.id === id) // tim san pham dua tren id
	return (
		<div>
			<UpdateAlbum data={album} onUpdate={onUpdate} />
		</div>
	)
}

export default EditPage
