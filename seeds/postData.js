const { Post } = require('../models');

const postData = [
  {
    "title": "How much should I water my cactus?",
    "species": "Cactus",
    "description": "I purchased a small cactus for my desk at work and am unsure how much I should be watering it. I know these plants survive in very dry climates, so I want give it the healthy amount of hydration that it needs.",
    "user_id": "1",
    "post_date": "2022-06-28",
    "image_path": "https://www.thespruce.com/thmb/UrpzHaQvhreTf0IkA3yTznNHKpM=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/angel-wings-cactus-ab159de1fa074df592d01d4d6799d7c9.jpg"
  },
  {
    "title": "What is the proper after care for my sunflower plant?",
    "species": "Sunflower",
    "description": "My sunflower plant had its first flower last week, and I want to know how best to take care of it now.",
    "user_id": "2",
    "post_date": "2022-06-29",
    "image_path": "https://cdn.mos.cms.futurecdn.net/xgkXGPm9WryeuFx9qMfQnW-1200-80.jpg"
  },
  {
    "title": "When does the stinging nettle plant sting go away?",
    "species": "Stinging Nettle",
    "description": "I accidentally stung myself on my stinging nettle plant today and it is quite painful! I want to know how long this discomfort will last and if there are any remedies to make it go away quicker.",
    "user_id": "3",
    "post_date": "2022-06-27",
    "image_path": "https://cdn.britannica.com/21/196021-050-45CAA3DB/Stinging-nettle.jpg"
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
