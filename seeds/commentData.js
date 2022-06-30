const { Comment } = require('../models');

const commentData = [
  {
    "response": "10mg of water once a week will be sufficient. Be sure not to overwater it and to give it lots of sun!",
    "user_id": "4",
    "post_id": "1",
    "post_date": "2022-06-28",
    // need upvote by feature
    // need green_thumb_counter feature
    "green_thumb_counter": "5"
  },
  {
    "response": "I don't think it needs any water, just lots of sun. But I'm not so sure!",
    "user_id": "5",
    "post_id": "1",
    "post_date": "2022-06-28",
    // need upvote by feature
    // need green_thumb_counter feature
    "green_thumb_counter": "1"
  },
  {
    "response": "Not too much water!",
    "user_id": "6",
    "post_id": "1",
    "post_date": "2022-06-29",
    // need upvote by feature
    // need green_thumb_counter feature
    "green_thumb_counter": "0"
  },
  {
    "response": "Water it once a day. You can also use some fertilizer to help it stay healthy!",
    "user_id": "4",
    "post_id": "2",
    "post_date": "2022-06-28",
    // need upvote by feature
    // need green_thumb_counter feature
    "green_thumb_counter": "10"
  },
  {
    "response": "It is pretty self sufficient!",
    "user_id": "5",
    "post_id": "2",
    "post_date": "2022-06-29",
    // need green_thumb_counter feature
    "green_thumb_counter": "2"
  },
  {
    "response": "I want to know the answer to this question as well.",
    "user_id": "6",
    "post_id": "2",
    "post_date": "2022-06-29",
    // need green_thumb_counter feature
    "green_thumb_counter": "0"
  },
  {
    "response": "I got stung too and am looking forward to this answer.",
    "user_id": "4",
    "post_id": "3",
    "post_date": "2022-06-28",
    // need green_thumb_counter feature
    "green_thumb_counter": "0"
  },
  {
    "response": "Try some polysporin and ice packs help with instant itch relief. It takes around 3 - 5 days typically.",
    "user_id": "5",
    "post_id": "3",
    "post_date": "2022-06-28",
    // need green_thumb_counter feature
    "green_thumb_counter": "8"
  },
  {
    "response": "It should go away by itself in around a week.",
    "user_id": "6",
    "post_id": "3",
    "post_date": "2022-06-28",
    // need green_thumb_counter feature
    "green_thumb_counter": "2"
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
