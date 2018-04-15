const router = require('express').Router();

router.use('/users', require('./users'));

router.use('/courses', require('./courses'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = router;