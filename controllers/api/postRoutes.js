const router = require('express').Router();
const { Post } = require('../../models');
const { Upvote } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  // update a comment's green thumb score by its `id` value
  try {
    const comment = await Comment.update({
      green_thumb_score: req.body.green_thumb_score,}, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(tag);
  
   } catch (err) {
        // console.log(err);
        res.status(400).json(err);
      };
    });

router.get('/upvote/:id', async (req, res) => {
  try {
    const upvoteData = await Upvote.findAll({
      WHERE: 
        {
          user_id: req.session.user_id,
          comment_id: req.body.comment_id,
        },
    });
let numUpvotes;

    if (upvoteData.length>0) {
      console.log(25);
    const upvote = upvoteData.get({ plain: true });
numUpvotes = 1
      res.status(200).json(numUpvotes);
    } else {
      numUpvotes = 0;
      res.send(numUpvotes);
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/upvote/:id', async (req, res) => {
  try {
    const newUpvote = await Upvote.create({
     
post_id: req.params.id,
      user_id: req.body.user_id,
    });

    res.status(200).json(newUpvote);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
