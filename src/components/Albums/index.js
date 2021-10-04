import React from "react"
import AlbumItem from "../AlbumItem"

const Albums = ({ data, onDelete, onDetail }) => {
	return (
		<div className='album py-5 bg-light'>
			<div className='container'>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
					{data.map((album, index) => {
						return <AlbumItem key={index} item={album} onDelete={onDelete} onDetail={onDetail} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Albums
