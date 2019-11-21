var Router = require('router')
const router = Router();

router.get('/experience', (req, res) => {
    res.render('experience');
});


module.exports = router;