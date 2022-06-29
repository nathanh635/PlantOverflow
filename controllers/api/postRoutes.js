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

router.get('/upvotes/:id', withAuth, async (req, res) => {
  try {
    const upvoteData = await Upvote.findOne(req.params.id, {
      WHERE: 
        {
          user_id: req.session.user_id,
          post_id: req.params.id,
        },
    });

    if (upvoteData.length>0) {
    const upvote = upvoteData.get({ plain: true });

      res.send(1);
    } else {
      res.send(0);
    }

  } catch (err) {
    res.status(500).json(err);
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
