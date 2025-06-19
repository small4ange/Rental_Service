import Router from "express";
import { addReview, getReviewsByOfferId } from "../controllers/reviewController.js";
import { parseId } from '../middleware/parseId.js';
import { authenticateToken } from "../middleware/AuthMiddleware.js";

const router = new Router();

router.post('/:offerId', parseId, addReview);
router.get('/:offerId', parseId, authenticateToken, getReviewsByOfferId);

export default router;