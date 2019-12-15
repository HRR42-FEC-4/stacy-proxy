import React from 'react';

const StarRating = (props) => {
  let stars = [];

  for(var i = 0; i < props.rating; i++) {
    stars.push(<span class='star'><i class='fa fa-star'></i>
      </span>)
  };

  if(props.rating < 5) {
    for(let j = 0; j < 5 - props.rating; j++) {
      stars.push(<span class="star"><i class="fa fa-star-o"></i>
      </span>)
    }
  }
  return ( stars )
}

export default StarRating;

