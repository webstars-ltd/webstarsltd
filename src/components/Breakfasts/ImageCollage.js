import React, { useState } from "react"
import * as Icon from "react-feather"

const ImageCollage = ({ blok }) => {
  const [model, setModel] = useState(false)
  const [tempImgSrc, setTmpImgSrc] = useState("")

  const photos = blok.images.map(item => ({
    src: item.filename,
  }))

  const getImg = src => {
    setTmpImgSrc(src)
    setModel(true)
  }

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <Icon.X onClick={() => setModel(false)} />
      </div>
      <div className="custom-container">
        <div className="gallery">
          {photos.map((photo, index) => (
            <div
              className="photo"
              key={index}
              onClick={() => getImg(photo.src)}
            >
              <img src={photo.src} alt="" style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImageCollage
