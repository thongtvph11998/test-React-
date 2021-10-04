import PropTypes from "prop-types"
import React from "react"
import Albums from "../../components/Albums"

function Homepage({ albums, onHandleRemove, onHandleDetail }) {
	return (
		<div>
			<h2 align='center'>Home Page</h2>
			<Albums data={albums} onDelete={onHandleRemove} onDetail={onHandleDetail} />
		</div>
	)
}

Homepage.propTypes = {
	albums: PropTypes.array.isRequired,
	onHandleRemove: PropTypes.func.isRequired,
	onHandleDetail: PropTypes.func.isRequired,
}

export default Homepage
