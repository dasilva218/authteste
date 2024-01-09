import { dirname } from 'node:path';

export const User = {
  home: (req, res) => {
    res.sendFile('view/index.html', {
      root: dirname('view'),
    });
  },

  signin: (req, res) => {
    res.sendFile('view/index.html', {
      root: dirname('view'),
    });
  },
};
