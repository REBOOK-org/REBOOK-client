import axios from 'axios'

export default async function cloudinaryUploader(img) {
  const cloudName = import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME

  const data = new FormData()
  //  console.log(book.images[0], 44444444444444)

  data.append('cloud_name', cloudName)
  data.append('file', img)
  data.append('upload_preset', 'w7hv4pl8')
  data.append('folder', 'rebook books')

  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/dl2lbgsg7/image/upload`,
      data,
    )
    return res.data.secure_url

    console.log('Image uploaded successfully:', res.data.secure_url)
  } catch (err) {
    console.log(err)
  }
}
