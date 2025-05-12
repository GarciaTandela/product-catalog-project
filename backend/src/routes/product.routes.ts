import express, { Router } from 'express';
import ProductController from '../controllers/product.controller';

const Product: ProductController = new ProductController();
const router: Router = express.Router();

router.get('/getall', Product.getAll);
router.post('/create', Product.create);
router.delete('/delete/:productId', Product.delete);
router.patch('/edit/:productId', Product.edit);
router.get('/get/:productId', Product.get);

export = router;
