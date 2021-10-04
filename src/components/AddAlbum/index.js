import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import { v4 as uuidv4 } from "uuid"
import { API } from "../../api/constants"
import FirebaseStorage from "../../firebase"

const AddAlbum = ({ onAdd }) => {
	const [categories, setCategories] = useState([])
	let history = useHistory()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onHandleSubmit = async (data) => {
		console.log("Data: ", data)
		let file = data.image[0]
		if (!file) {
			Swal.fire({
				icon: "warning",
				title: "Vui lòng chọn ảnh upload",
			})
			return
		}
		const resFilebase = await FirebaseStorage.upload(file)
		const imagePath = resFilebase.file.url
		const newData = {
			id: uuidv4(),
			...data,
			image: imagePath,
		}
		onAdd(newData)
		console.log("Album: ", newData)
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
			<h2>Thêm sản phẩm</h2>
			<form action='' onSubmit={handleSubmit(onHandleSubmit)} enctype='multipart/form-data'>
				<div className='form-group mb-2'>
					<input
						type='text'
						name='name'
						placeholder='Tên sản phẩm'
						className='form-control'
						ref={register({ required: true })}
					/>
					{errors.name && <span className='text-danger'>This field is required</span>}
				</div>
				<div className='form-group mb-2'>
					<input
						type='number'
						name='price'
						placeholder='Giá sản phẩm'
						className='form-control'
						ref={register({ required: true })}
					/>
					{errors.price && <span className='text-danger'>This field is required</span>}
				</div>
				<div className='form-group mb-2'>
					<input
						type='number'
						name='price_detail'
						placeholder='Giá sản phẩm sale'
						className='form-control'
						ref={register({ required: true })}
					/>
					{errors.price_detail && <span className='text-danger'>This field is required</span>}
				</div>
				<div className='form-group mb-2'>
					<textarea name='desc' className='form-control' ref={register}></textarea>
				</div>
				<div className='form-group mb-2'>
					<input type='checkbox' name='status' ref={register} />
					Tình trạng
				</div>
				<div className='form-group mb-2'>
					<input type='file' name='image' ref={register({ required: true })} />
					{errors.image && <span className='text-danger'>This field is required</span>}
				</div>{" "}
				<select name='categoryId' ref={register({ required: true })}>
					{categories.map((cate, index) => (
						<option key={index} value={cate.id}>
							{cate.name}
						</option>
					))}
				</select>
				<div className='form-group mt-2'>
					<input type='submit' value='Thêm sản phẩm' className='btn btn-primary' />
				</div>
			</form>
		</div>
	)
}

export default AddAlbum
