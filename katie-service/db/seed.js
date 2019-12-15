const db_reviews  = require('./index.js');
const Product = require('./models/Products')
const Review = require('./models/Reviews');
const faker = require('faker');

const maxReviewCount = 20;
const productCount = 100;

const productTags = ["Great Picture Quality", "Great Quality Paper", "Perfect Size", "Visually Pleasing", "Vivid Detail", "Nice Workmanship", "Attractive Frame Design", "Great Quality Material", "Excellent Print And Frame"];

const getNumBetween = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomTags = () => {
  let randomTagCount = getNumBetween(productTags.length, 1);

  let randomSort = productTags.slice().sort((a, b) => {
    return 0.5 - Math.random();
  })

  return randomSort.splice(0, randomTagCount).sort().join(' | ');
};

const getRandomData = (id) => {
  let randomData = [];
  let reviewCount = getNumBetween(maxReviewCount, 0);

  for(let i = 1; i <= reviewCount + 1; i++) {
    randomData.push({
      rating: getNumBetween(5, 1),
      headline: faker.commerce.productName(),
      comments: faker.lorem.paragraph(),
      username: faker.internet.userName(),
      thumbs_up: getNumBetween(0, 50),
      thumbs_down: getNumBetween(0, 50),
      tags: getRandomTags(),
      date_created: faker.date.between('2010-01-01', new Date()),
      product_id: id
    })
  }
  return randomData;
};

db_reviews.sync()
  .then(() => {
    for(let i = 0; i <= productCount; i++) {
      Product.create({ product_id: i });
      let randomReviews = getRandomData(i);
      randomReviews.forEach(review => {
          Review.create(review);
      })
    }
  })
  .catch(error => {
    console.log(error);
  })

