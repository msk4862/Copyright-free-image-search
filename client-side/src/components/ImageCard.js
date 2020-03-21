import React from 'react'

import '../styles/ImageCard.css'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef()
    }

    componentDidMount() {
        //when image is loaded
        this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () => {
        // console.log(this.imageRef.current.clientHeight)
        // grid-auto-rows=10 in css
        const span = Math.ceil(this.imageRef.current.clientHeight / 10)
        this.setState({spans : span})
    }


    render() {
        const {url, tags, source} = this.props.image
        return (
            <div className='row imgCard justify-content-center' style={{gridRowEnd : `span ${this.state.spans}`}}>
                <img className='col-10 col-sm-12 img' ref={this.imageRef} src={url} alt={tags}/>
                <div className='row overlay justify-content-center'>
                        <p className='source'>Source: {source.toUpperCase()}</p>
                        <a className='link' href={url}
                         target='_blank' rel="noopener noreferrer">View</a>
                </div>
            </div>
        )
    }
}

export default ImageCard