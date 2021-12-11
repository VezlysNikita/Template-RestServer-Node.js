const { Router } = require('express');
const router = Router();

const {
      getUser,
      postUser,
      putUser,
      deleteUser,
} = require('../controllers/api.controller');

router.get('/', getUser);
router.put('/:id', putUser);
router.post('/', postUser);
router.delete('/', deleteUser);

router.get('*', function (req, res) {
      res.status('404').send('Error 404');
});

module.exports = router;
