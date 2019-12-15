import React from 'react';
import ReactDom from 'react-dom';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainImageContainer">
        <div className="mainImageFlex">
          <div className="mainImageWrapper">
            <img src={this.props.image} className='mainImage' />
          </div>
        </div>
      </div>
    )
  }
}

export default MainImage;