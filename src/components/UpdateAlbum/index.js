import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import { API } from "../../api/constants"
import FirebaseStorage from "../../firebase"

const UpdateAlbum = ({ data, onUpdate }) => {
	const [categories, setCategories] = useState([])
	let history = useHistory()
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = async (album) => {
		let file = album.image[0]
		if (!file) {
			Swal.fire({
				icon: "warning",
				title: "Vui lòng chọn ảnh upload",
			})
			return
		}
		const resFilebase = await FirebaseStorage.upload(file)
		const imagePath = resFilebase.file.url
		const updatedAlbum = {
			...data,
			...album,
			image: imagePath,
		}
		onUpdate(updatedAlbum)
		console.log("Album: ", updatedAlbum)
		history.push("/manager")
	}
	const loadCategories = async () => {
		try {
			const response = await fetch(`${API}/categories`)
			const cate = await response.json()
			setCategories(cate)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		loadCategories()
	}, [])
	return (
		<div>
			<h2>Cập nhật sản phẩm</h2>
			<form action='' onSubmit={handleSubmit(onSubmit)}>
				<div className='form-group mb-2'>
					<label>Name Product</label>
					<input
						type='text'
						name='name'
						placeholder='Tên sản phẩm'
						className='form-control'
						defaultValue={data.name}
						ref={register}
					/>
				</div>
				<div className='form-group mb-2'>
					<label>Price Product</label>
					<input
						type='number'
						name='price'
						placeholder='Giá sản phẩm'
						className='form-control'
						defaultValue={data.price}
						ref={register}
					/>
				</div>
				<div className='form-group mb-2'>
					<label>Description</label>
					<textarea
						name='desc'
						className='form-control'
						defaultValue={data.desc}
						ref={register}
					></textarea>
				</div>
				<div className='form-group mb-2'>
					<input type='checkbox' name='status' ref={register} />
					Tình trạng
				</div>
				<div>
					<input type='file' name='image' ref={register({ required: true })} />
					{errors.image && <span className='text-danger'>This field is required</span>}
				</div>
				<select name='categoryId' ref={register({ required: true })}>
					{categories.map((cate, index) => (
						<option key={index} value={cate.id}>
							{cate.name}
						</option>
					))}
				</select>
				<div className='form-group'>
					<input type='submit' value='Cập nhật sản phẩm' className='btn btn-primary' />
				</div>
			</form>
		</div>
	)
}

export default UpdateAlbum
