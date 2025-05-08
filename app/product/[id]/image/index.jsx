'use client'
import { useState } from 'react'


export default function ProductImage({ images }) {
  const [activeImg, setActiveImg] = useState(images[0])

  return (
    <div className="flex ] flex-col-reverse md:flex-row mb-[20px]">
      <div className="space-y-4 mr-4 ">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImg(img)}
            className={`border cursor-pointer ${
              activeImg === img ? 'border-green-500' : 'border-transparent'
            }`}
          >
            <img src={img} width={80} height={80} alt={`thumb-${i}`} />
          </div>
        ))}
      </div>
      <div>
        <img src={activeImg} width={400} height={400} alt="main image" />
      </div>
    </div>
  )
}
