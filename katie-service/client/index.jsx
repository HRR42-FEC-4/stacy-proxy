import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.jsx';

class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      reviews: [],
      breakdown: null,
      loading: true
    }
    this.computeAverage = this.computeAverage.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    let productId = Math.floor(Math.random() * 100)
    axios.get('/reviews/' + productId)
    .then(response => {
      this.setState({
        productId: productId,
        reviews: response.data,
        breakdown: this.computeAverage(response.data),
        loading: false
      })
    })
    .catch(err => {
      console.log(err)
    });
  }

  computeAverage(reviews) {
    let ratings = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };
    let sum = 0;

    reviews.forEach(review => {
      sum += review.rating;
      ratings[review.rating] += 1;
    })
    return JSON.stringify(ratings)
  }

  render() {
    if(this.state.loading) {
      return 'Loading...'
    }

    if(this.state.reviews.length) {
      return (
        <div class='reviews-body'>
          <Reviews reviews={this.state.reviews} breakdown={this.state.breakdown}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<ReviewsModule />, document.getElementById('reviews-module'));
