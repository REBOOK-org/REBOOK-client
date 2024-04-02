import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
const AddBookImages = () => {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles((prevUploadedFiles) => [
        ...prevUploadedFiles,
        ...acceptedFiles,
      ])
      // Call your backend API endpoint to upload files
    },
  })
  const deleteImg = (e, img) => {
    e.preventDefault()
    setUploadedFiles(uploadedFiles.filter((image) => image !== img))
  }

  console.log(uploadedFiles)
  return (
    <div className=" w-full lg:w-4/5 xl:w-3/5 ">
      <h1 className=" font-sans font-bold sm:text-lg md:text-2xl block justify-self-center">
        Add some photos of your book
      </h1>
      <div className=" ">
        <div
          {...getRootProps()}
          className="flex flex-col items-center w-full mt-8 bg-blue-gray-50 h-[200px] max-w-lg p-5  my-5 text-center border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-gray-500 dark:text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          <h2 class="mt-1 m tracking-wide font-bold">
            Click to upload or drag and drop
          </h2>
          <p class="mt-2 text-medium tracking-wide text-gray-700 dark:text-gray-400">
            Upload at least 6 photos
          </p>
          <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 512x512px)
          </p>
          <input
            id="dropzone-file"
            {...getInputProps()}
            type="file"
            class="hidden"
          />
        </div>

        <div className="flex w-full mt-2 px-3">
          {uploadedFiles.map((img, index) => {
            return (
              <div className="relative w-fit">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <button
                    className="bg-red-500 text-white rounded-full border-2 border-red-500 font-bold flex items-center justify-center"
                    style={{ width: '30px', height: '30px' }}
                    onClick={(e) => {
                      deleteImg(e, img)
                    }}
                  >
                    x
                  </button>
                </div>
                <img
                  src={URL.createObjectURL(img)}
                  key={img.path}
                  className="rounded-0 mr-2 w-[100px] h-[100px]"
                  alt={img.name}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default AddBookImages
