const Product = require('./model.js');
const faker = require('faker');
const Sequelize = require('sequelize');
const Promise = Sequelize.Promise;

Product.sync({logging: false, force: true}).then(() => {
  console.log('Generating Data...');
  const getImages= (i) => {
    const imageURLs = [];
    for (let j = i * 5; j < i * 5 + 5; j++) {
      imageURLs.push(`https://picsum.photos/seed/${j}/400/600`);
    }
    return imageURLs;
  }

  const products = [];

  for(let i = 0; i < 100; i++) {
    const product = {
      id: i,
      name: faker.commerce.productName(),
      artist: `${faker.name.firstName()} ${faker.name.lastName()}`,
      imageURLs: JSON.stringify(getImages(i)),
      price: faker.commerce.price()
    };
    products.push(Product.create(product));
  }

  console.log('All data generated, creating records');

  Promise.all(products)
    .then(console.log('Records created, seeding script completed successfully!'))
    .catch(err => console.error('an error occured', err));
});
