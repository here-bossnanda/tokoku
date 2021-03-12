const router = require('express').Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.post('/', productController.store)
router.put('/:id', productController.update)
router.delete('/:id', productController.destroy)

module.exports = router;