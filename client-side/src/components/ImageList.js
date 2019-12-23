import React from 'react'

import '../styles/ImageList.css'
import ImageCard from './ImageCard'

function ImageList(props) {

    

    function renderList() {
        if (props.images === null) {
            return <div className='empty'>Type something in search bar...</div>
        }
        return <div className='image-list'>
                {renderCards()}
            </div>
        
    }

    function renderCards() {
        return props.images.map((image) => {
            return <ImageCard key={image.id} image={image}/>
        })
    }
    
    return (
        <div>
            {renderList()}
        </div>
    )
}

export default ImageList