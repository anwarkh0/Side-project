import express from 'express';
import { authenticate } from '../middlewares/authmiddlewares.js';

import {
    login,
    signup,
    loggedInUser,
    logout
} from '../controllers/authcontroller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/login-user',authenticate, loggedInUser);
router.post('/logout', logout);


export default router