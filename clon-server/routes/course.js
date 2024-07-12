const express = require ('express');
const router = express.Router();

const {get, getOne, create, upDate, del} = require ('../controllers/courseController')

router.get('/', get);

//detalle - rutas parametrizadas:
router.get('/:id', getOne);

router.post('/', create);

router.put("/:id", upDate);

router.delete("/:id", del);


module.exports = router;