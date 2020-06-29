

let express = require('express')
let heroesController = require ('../controllers/heroesController.js')

let router = express.Router();

router.get('/',heroesController.listado);
router.get('/detalle/:id',heroesController.detalle);
router.get('/bio/:id/:ok?',heroesController.detalleBio);

module.exports = router;

