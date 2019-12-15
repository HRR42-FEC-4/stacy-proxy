import React from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';
import RatingsOverview from './RatingOverview.jsx';

const Reviews = (props) => {
  const reviews = props.reviews.map((review) =>
    <div id={review.id} class='review-body row'>
      <StarRating rating={review.rating}/>
      <div class='review-headline'>{review.headline}</div>
      <div class='review-comments'>{review.comments}</div>
      <div class='review-tags'>{review.tags}</div>
      <span class='review-user'>{review.username}</span>
      <span class='pull-right'>
        <span class='review-date'>{moment(review.date_created).format('l')}</span>
        <span class='review-up'><button class='thumbs-button'><i class='fa fa-thumbs-o-up thumb'></i> {review.thumbs_up}</button></span>
        <span class='review-down'><button class='thumbs-button'><i class='fa fa-thumbs-o-down thumb'></i> {review.thumbs_down}</button></span>
      </span>
    </div>
  );

  return (
    <div className='reviews-accordion'>
      <div class='accordion-container'>
        <div class='accordion-header'>Verified Reviews ({props.reviews.length})</div>
        <div class='accordian-body'>
          <div class='reviews-container'>
          <div class='reviews-body'>
          <div class='row mb-1'>
            <div class='col-md-7 col-lg-7'>{reviews}</div>
            <div class='col-md-5 col-lg-5'><RatingsOverview average={props.breakdown}/></div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

