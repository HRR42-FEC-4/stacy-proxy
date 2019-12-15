import React from 'react';

const RatingsGraph = (props) => {
  return (
    <div class='row'>
      <div class='col-md-12 col-lg-12'>
        <span class='star-rating-text'>{ props.rating + ' stars' }</span>
        <div class='progress reviews-progress'>
          <span class='progress-bar progress-bar-blue' role='progressbar' aria-valuenow={props.percent} aria-valuemin='0' aria-valuemax='100' style={{ width: props.percent + '%' }}></span>
        </div>
        <span class={props.rating + '-star star-rating-text'}> {props.ratingCount}</span>
      </div>
    </div>
  )
}

export default RatingsGraph;
