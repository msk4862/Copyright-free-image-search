import React from 'react'
import '../styles/ImageList.css'
import ImageCard from './ImageCard'

function ImageList(props) {
    const imageList = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
      })

    return (
        <div className='image-list'>
            {imageList}
        </div>
    )
}

export default ImageList