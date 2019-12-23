import React from 'react'

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
        console.log(this.imageRef.current.clientHeight)
        // grid-auto-rows=10 in css
        const span = Math.ceil(this.imageRef.current.clientHeight / 10)
        this.setState({spans : span})
    }


    render() {
        const {url, tags} = this.props.image
        return (
            <div style={{gridRowEnd : `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={url} alt={tags}/>
            </div>
        )
    }
}

export default ImageCard