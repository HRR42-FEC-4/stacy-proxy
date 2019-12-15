import React from 'react';
import RatingsGraph from './RatingsGraph.jsx';

const RatingsOverview = (props) => {
  let breakdown = JSON.parse(props.average);
  let sum = 0;
  let count = 0;

  for(var key in breakdown) {
    sum += key * breakdown[key];
    count += breakdown[key];
  };

  return (
    <div>
      <div class='average-rating'>{(sum / count).toFixed(1)}</div>
      <div class='ratings-graph'>
        <div class='row graph-row'>
          {Object.keys(breakdown).reverse().map(rating => {
            return <RatingsGraph percent={(breakdown[rating] / count) * 100} rating={rating} ratingCount={breakdown[rating]}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default RatingsOverview;