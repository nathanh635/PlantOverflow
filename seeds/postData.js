const { Post } = require('../models');

const postData = [
  {
    "title": "How much should I water my cactus?",
    "species": "Cactus",
    "description": "I purchased a small cactus for my desk at work and am unsure how much I should be watering it. I know these plants survive in very dry climates, so I want give it the healthy amount of hydration that it needs.",
    "user_id": "1",
    "post_date": "2022-06-28"
    // need to add image path
  },
  {
    "title": "What is the proper after care for my sunflower plant?",
    "species": "Sunflower",
    "description": "My sunflower plant had its first flower last week, and I want to know how best to take care of it now.",
    "user_id": "2",
    "post_date": "2022-06-29"
    // need to add image path
  },
  {
    "title": "When does the stinging nettle plant sting go away?",
    "species": "Stinging Nettle",
    "description": "I accidentally stung myself on my stinging nettle plant today and it is quite painful! I want to know how long this discomfort will last and if there are any remedies to make it go away quicker.",
    "user_id": "3",
    "post_date": "2022-06-27"
    // need to add image path
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
