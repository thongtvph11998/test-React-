import React from "react"
import { useForm } from "react-hook-form"
import { useHistory, useParams } from "react-router-dom"
import { API } from "../../api/constants"
const UpdateCate = () => {
	let history = useHistory()
	const { id } = useParams()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onUpdate = async (values) => {
		const response = await fetch(`${API}/categories/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
		history.push("/categories")
	}
	return (
		<div>
			<h2>Update danh muc</h2>
			<form action='' onSubmit={handleSubmit(onUpdate)} enctype='multipart/form-data'>
				<div className='form-group mb-2'>
					<input
						type='text'
						name='name'
						placeholder='Tên danh muc'
						className='form-control'
						ref={register({ required: true })}
					/>
					{errors.name && <span className='text-danger'>This field is required</span>}
				</div>
				<div className='form-group'>
					<input type='submit' value='Thêm sản phẩm' className='btn btn-primary' />
				</div>
			</form>
		</div>
	)
}

export default UpdateCate
