import React from 'react'

function ImageList(props) {
    return (
        <div>
            <img src={props.image.urls.regular} alt={props.image.alt_description}/>
        </div>
    )
}

export default ImageList