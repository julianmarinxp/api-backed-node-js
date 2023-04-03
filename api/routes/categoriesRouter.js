const express = require('express');

const router = express.Router();
const app = express();


router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
})


module.exports= router;
