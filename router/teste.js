import Utilisateur from '../modeles/users.js';
import { Router } from 'express';

export const teste = Router();

// Récupération des utilisateurs
teste.get('/users', (req, res) => {
  Utilisateur.getUtilisateurs().then((utilisateurs) => res.json(utilisateurs));
});

// Création d'un utilisateur
teste.post('/users', function (req, res) {
  Utilisateur.createUtilisateur(req.body).then((utilisateur) => res.json(utilisateur));
});


