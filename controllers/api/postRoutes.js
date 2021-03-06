const router = require('express').Router();
const { Post } = require('../../models');
const { User } = require('../../models');
const { Upvote } = require('../../models');
const { Comment } = require('../../models');
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
  // update a comment's green thumb score by its `id` value.
  try {

    const comment = await Comment.update({
      green_thumb_counter: req.body.green_thumb_counter}, {
      where: {id:req.params.id}

    })
      // update commenter's green thumb score by using their user ID value

    const user = await User.increment({
      green_thumb_counter: +1}, {
      where: {id:req.body.commenter_id}

    })

    res.status(200).json(comment);
  
   } catch (err) {
        // console.log(err);
        res.status(400).json(err);
      };
    });

    //Get route to see if user has already upvoted a post

router.get('/upvote/:id', async (req, res) => {
  try {
    const upvoteData = await Upvote.findAll({
      where: 
        {
         comment_id: req.params.id,
          user_id: req.session.user_id,
        },
    });

 
    if (upvoteData.length>0) {

      res.status(418).json(1);
    } else {
      res.status(200).json(0);
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err);

  }
});

//Post route to create a new row in the upvote table

router.post('/upvote/:id', withAuth, async (req, res) => {
  try {
    const newUpvote = await Upvote.create({
     post_id: req.body.post_id,
     comment_id: req.params.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newUpvote);
  } catch (err) {
    res.status(400).json(err);
  }
});

//route to delete posts
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

