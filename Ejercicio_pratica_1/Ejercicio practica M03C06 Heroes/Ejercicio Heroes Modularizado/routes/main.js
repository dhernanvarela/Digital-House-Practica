let express = require('express')
let mainController = require ('../controllers/mainController.js')

let router = express.Router();

router.get('/creditos',mainController.creditos);
router.get('/',mainController.home);


module.exports = router;