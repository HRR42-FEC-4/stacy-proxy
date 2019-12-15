import React from 'react';
import ReactDom from 'react-dom';
import MainImage from './MainImage.jsx';
import ImageList from './ImageList.jsx';

class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
    this.handleSelectImage = this.handleSelectImage.bind(this);
  }

  handleSelectImage(index) {
    this.setState({selected: index});
  }

  render() {
    return (
      <div className='imageModule'>
        <ImageList selected={this.state.selected} images={this.props.images} onClick={this.handleSelectImage}/>
        <MainImage selected={this.state.selected} image={this.props.images[this.state.selected]}/>
      </div>
    )
  }
}

export default ProductImages;