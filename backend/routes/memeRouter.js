import express from 'express';
import {
    authenticate,
    checkRole
} from '../middlewares/authmiddlewares.js';

import {
    getMeme,
    getAllMeme,
    addMeme,
    deleteMeme,
    updateMeme,
    getMemesByUser
} from '../controllers/meme.js';
import uploadImage from "../middlewares/multer.js";

const router = express.Router();

router.post('/create', authenticate, uploadImage.single('image'), addMeme);
router.get('/getAll', getAllMeme);
router.get('/getOne/:id', getMeme);
router.get('/getmemebyuser/:userId', getMemesByUser);
router.delete('/delete', authenticate, deleteMeme);
router.patch('/update', authenticate, updateMeme);


export default router