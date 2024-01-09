import { Router } from 'express';
import { User } from '../controller/user.js';

export const router = Router();

router.get('/', User.home);

router.post('/signin', User.signin);
