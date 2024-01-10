import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Utilisateur = {
  // Récupération de tous les utilisateurs
  getUtilisateurs: async () => {
    return await prisma.utilisateur.findMany();
  },

  // Création d'un nouvel utilisateur
  createUtilisateur: async (data) => {
    return await prisma.utilisateur.create({ data: {
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        password: data.password,
        role: data.role

    }});
  },

  // Mise à jour d'un utilisateur
  updateUser: async (id, data) => {
    // Vérification de l'existence de l'utilisateur
    const existingUser = await prisma.utilisateur.findUnique({ where: { id } });
    if (!existingUser) throw 'Utilisateur non existant';

    // Mise à jour des données de l'utilisateur
    return await prisma.utilisateur.update({ where: { id }, data });
  },

  // Suppression d'un utilisateur en utilisant l'id
  deleteUser: async (id) => {
    // Vérification de l'existence de l'utilisateur
    const existingUser = await prisma.utilisateur.findUnique({ where: { id } });
    if (!existingUser) throw 'Utilisateur non existant';

    // Suppression de l'utilisateur
    return await prisma.utilisateur.delete({ where: { id } });
  },
};

export default Utilisateur;
