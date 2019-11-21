var Router = require('router')
const router = Router();

router.get('/index', (req, res) => {
    res.render('index');
});


module.exports = router;