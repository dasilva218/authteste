import { dirname } from 'node:path';
import Utilisateur from '../model/users.js';
import { error } from 'node:console';

export const User = {

  home: (req, res) => {
    res.sendFile('view/index.html', {
      root: dirname('view'),
    });
  },

  signin: async (req, res) => {
    const { email, password } = req.body;
    try {
      
      let user = await Utilisateur.getOneUtilisateur(email);
      
      if (user && user.password === password) {
        //req.session.userId = user._id;
        return res.sendFile('view/index.html', {
          root: dirname('view'),
        });
      } else if (!user) {
        return res.status(401).json({ message: "Email ou mot de passe incorrect" });
      } else {
        return res.status(500).json({ message: 'Erreur serveur' });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: `Erreur : ${e}` });
    }
  },
  

utilisateurs: async (req, res) => {
  const data = req.body; 
  try {
    let newUser = await Utilisateur.createUtilisateur(data);
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
},

users: async (req,res)=>{
  try{

    let AllUsers=await Utilisateur.getUtilisateurs();
    res.json(AllUsers);
  }
  catch(error){
    console.error;
    res.status(500).json({message:"Erreur du serveur"})


}
}



  
}
