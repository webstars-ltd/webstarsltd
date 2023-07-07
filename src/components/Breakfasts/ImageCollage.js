import React from "react"
import { ReactPhotoCollage } from "react-photo-collage"

const ImageCollage = ({ blok }) => {
  const photos = blok.images.map(item => ({
    source: item.filename,
    alt: item.alt,
  }))

  const setting = {
    width: "100%",
    height: ["100%"],
    layout: [2, 3, 2],
    photos,
    showNumOfRemainingPhotos: true,
  }

  return (
    <div className="custom-container">
      <div className="image-collage">
        <ReactPhotoCollage {...setting} />
      </div>
    </div>
  )
}

export default ImageCollage
