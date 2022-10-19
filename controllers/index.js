const router = require('express').Router();

const chineseRoutes = require('./chineseRoutes');

router.use('/c', chineseRoutes);

module.exports = router;
