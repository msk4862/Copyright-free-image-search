import React from "react";

import "../styles/ImageCard.scss";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //when image is loaded
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    // console.log(this.imageRef.current.clientHeight)
    // grid-auto-rows=10 in css
    if (this.imageRef.current) {
      const span = Math.ceil(this.imageRef.current.clientHeight / 10);
      this.setState({ spans: span });
    }
  };

  render() {
    const { url, tags, src } = this.props.image;
    return (
      <div
        className="row imgCard justify-content-center"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          className="col-10 col-sm-12"
          ref={this.imageRef}
          src={src}
          alt={tags}
        />
        <div className="row overlay justify-content-center">
          <a
            className="btn"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Image
          </a>
        </div>
      </div>
    );
  }
}

export default ImageCard;
