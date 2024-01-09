import { Router } from 'express';
import { dirname } from 'node:path';

export const router = Router();

router.get('/', (req, res) => {
  res.sendFile('view/index.html', {root:dirname('view') } );
});
