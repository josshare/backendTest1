const { Router } = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await ModelUser.find();
    res.json(users);
    console.log(users);
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await ModelUser.findById(id);
    res.json(user);
});
//router.get('/users/', async (req, res) => {
//    const { limit, offset } = req.query.id;
//    if (limit && offset) {
//       const users = await ModelUser.find().limit(parseInt(limit)).skip(parseInt(offset));
//        res.json(users);
//    } else {
//        res.json("No se encontraron usuarios");
//    }
//}
//)

module exports = router;