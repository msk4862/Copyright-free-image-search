import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.imageRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.imageRef)
    }

    render() {
        const {urls, alt_description} = this.props.image
        return (
            <div>
                <img ref={this.imageRef} src={urls.regular} alt={alt_description}/>
            </div>
        )
    }
}

export default ImageCard