const router = require('express').Router();
const thouhgtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;