var Router = require('router')
const router = Router();

router.get('/about-me', (req, res) => {
    res.render('about-me');
});


module.exports = router;