import React from 'react'

const Post = () => {
  return (
    <div>

<form className='p-5'>
  <div className="mb-3">
    <label htmlFor="titleInput" className="form-label">Title</label>
    <input type="text" className="form-control" id="titleInput" placeholder="Enter car title"/>
  </div>

  <div className="mb-3">
    <label htmlFor="descriptionInput" className="form-label">Description</label>
    <textarea className="form-control" id="descriptionInput" rows="3" placeholder="Enter car description"></textarea>
  </div>

  <div className="mb-3">
    <label htmlFor="tagsInput" className="form-label">Tags</label>
    <input type="text" className="form-control" id="tagsInput" placeholder="Enter tags separated by commas (e.g., electric, sedan, luxury)"/>
  </div>

  <div className="mb-3">
    <label htmlFor="imageUpload" className="form-label">Images</label>
    <input type="file" className="form-control" id="imageUpload" multiple aria-describedby="imageHelp" accept="image/*"/>
    <div id="imageHelp" className="form-text">You can upload up to 10 images.</div>
  </div>

  <button type="submit" className="btn btn-primary">Add</button>
</form>


    </div>
  )
}

export default Post


