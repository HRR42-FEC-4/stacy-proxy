import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductImages from './components/ProductImages.jsx';
import Purchase from './components/Purchase.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 0,
        name: 'Waiting on server',
        artist: '',
        imageURLs: [''],
        price: 0
      }
    }
  }

  componentDidMount() {
    axios.get('/product/0')
      .then(res => {
        this.setState({
          product: res.data,
          currentImage: res.data.imageURLs[0]
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
    <div className='productModule'>
      <ProductImages images={this.state.product.imageURLs}/>
      <Purchase name={this.state.product.name} artist={this.state.product.artist} price={this.state.product.price}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('productMain'));