var Router = require('router')
const router = Router();

router.get('/projects', (req, res) => {
    res.render('projects');
});


module.exports = router;