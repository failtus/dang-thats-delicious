const express = require('express');

const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
router.get('/stores/:id/edit', catchErrors(storeController.editStore));


router.get('/api', (req, res) => {
  res.json({ message: 'Wow! I am working!' });
});
router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
