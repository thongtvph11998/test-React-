import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { API } from "../../api/constants"
const AddCate = () => {
	let history = useHistory()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onsubmit = async (values) => {
		console.log(values)
		const response = await fetch(`${API}/categories`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
		const data = await response.json()
		history.push("/categories")
	}

	return (
		<div>
			<h2>Thêm danh muc</h2>
			<form action='' onSubmit={handleSubmit(onsubmit)} enctype='multipart/form-data'>
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

export default AddCate
