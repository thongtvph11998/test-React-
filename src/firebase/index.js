import moment from "moment"
import firebase from "./config"

const FirebaseStorage = {
	getPath(path) {
		return `${moment().format("YYYY")}/${path}/${moment().format("DD-MM")}`
	},
	async upload(file, path = "upload") {
		let progress = 0
		const pathTo = this.getPath(path)

		const storageRef = firebase.storage().ref(`${pathTo}/${file.name}`)
		const url = await storageRef.put(file).then((snapshot) => {
			progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
			return storageRef
				.getDownloadURL()
				.then((url) => {
					return url
				})
				.catch((e) => {
					console.log("FirebaseError: ", e)
					return null
				})
		})
		return { file: { url, name: file.name }, progress }
	},
	async uploadMultiple(files, path = "upload") {
		const pathTo = this.getPath(path)
		let mediaResponse = []
		let progress = 0

		await Promise.all(
			files.map(async (file) => {
				const storageRef = firebase.storage().ref(`${pathTo}/${file.name}`)
				const url = await storageRef.put(file).then((snapshot) => {
					progress += ((snapshot.bytesTransferred / snapshot.totalBytes) * 100) / files.length
					return storageRef
						.getDownloadURL()
						.then((url) => {
							return url
						})
						.catch((e) => {
							console.log("FirebaseError: ", e)
							return null
						})
				})
				if (url) {
					mediaResponse = [...mediaResponse, { url, name: file.name }]
				}
			})
		)

		return { files: mediaResponse, progress }
	},
}

export default FirebaseStorage
