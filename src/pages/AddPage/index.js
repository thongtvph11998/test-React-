import React from "react"
import AddAlbum from "../../components/AddAlbum"
const AddPage = ({ onAdd }) => {
	return (
		<div>
			<AddAlbum onAdd={onAdd} />
		</div>
	)
}

export default AddPage
