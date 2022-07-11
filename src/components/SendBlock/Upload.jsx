import React from 'react'
import { useUpload } from '@zach.codes/use-upload/lib/react'
import { AiOutlinePaperClip } from 'react-icons/ai'
import './Upload.scss'


const Upload = () => {
  let [upload, { progress, loading }] = useUpload(({ files }) => ({
    method: 'PUT',
    url: 'http://localhost:4000',
    body: files[0],
  }))

  return (
    <>
      <label className='upload__label' htmlFor='upload'><AiOutlinePaperClip /></label>
      <div className='upload'>

        {loading ? `${progress}% complete` : null}
        <input
          id='upload'
          name='upload'
          type='file'
          accept='.jpg, .jpeg, .png'
          className='upload__input'
          multiple
          onChange={(e) => {
            if (e.target.files) {
              console.log(e.target.files)
              upload({ files: e.target.files })
            }
          }}
        />
      </div>
    </>
  )
}

export default Upload