const router = require('express').Router();
const apiRoutes =require('./api');

router.use('./api', apiRoutes);

router.use((req, res) => {
    console.log('site is live')
    res.status(404).send('<h1> CONFUSION 404 Error!<h1>');   
});

module.exports = router;
