import React from "react";

import "../styles/ImageCard.scss";

class ImageCard extends React.Component {
    constructor() {
        super();
        this.state = {
            spans: 0,
        };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpan);
    }

    componentWillUnmount() {
        this.imageRef.current.removeEventListener("load", this.setSpan);
    }

    setSpan = () => {
        // grid-auto-rows=10 in css
        if (this.imageRef.current) {
            const span = Math.ceil(this.imageRef.current.clientHeight / 10);
            this.setState({ spans: span });
        }
    };

    render() {
        const { url, previewURL, author, service } = this.props.image;
        return (
            <div
                className="row imgCard justify-content-center"
                style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    className="col-10"
                    ref={this.imageRef}
                    src={previewURL}
                    alt={service + " image by " + author}
                />
                <div className="row overlay justify-content-center">
                    <a
                        className="btn"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer">
                        View Image
                    </a>
                </div>
            </div>
        );
    }
}

export default ImageCard;
