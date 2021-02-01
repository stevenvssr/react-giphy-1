import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {

    if (!this.props.id) {
      return null;
    }
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.webp`;
    return (
      <img className="gif" src={src} alt="Sport" onClick={this.handleClick} />
    );
  }
}

export default Gif;
