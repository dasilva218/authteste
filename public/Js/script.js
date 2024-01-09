const enregistrement = document.querySelector('.enregistrer');
const direction = document.querySelector('.container-form');
const change = document.querySelector('.message')
let titre = document.querySelector('.titre')
let cta = document.querySelector('.cta')
let passe = document.querySelector('.passe')
let connexion = document.querySelector('.connexion')
let titreField = document.querySelector('.titre-field')
// const disply = document.querySelector('.return')

enregistrement.addEventListener('click', ()=>{
        
        direction.classList.add('return')
        change.classList.add('change')
        change.classList.remove('message')
        titre.textContent = `Inscrivez-vous et rejoignez la meilleure applicationde gestion au monde !`
        enregistrement.textContent = `Se connecter`
        cta.style.display = "none"
        passe.style.display = "none"
        titreField.textContent = `S'enregistrer`
        connexion.textContent = `S'ENREGISTRER`   
});

connexion.addEventListener('click', ()=>{
    alert('Enregistrement effecrué avec succès. Merci pour votre confiance!')
    

});

    //     // titre.textContent = `Inscrivez-vous et rejoignez la meilleure applicationde gestion au monde !`
    // direction.classList.add('return-reverse')
    // change.classList.remove('change')
    // change.classList.add('message')
//     // enregistrement.textContent = `Se connecter`
//     // cta.style.display = "none"
//     // passe.style.display = "none"
//     // titreField.textContent = `S'enregistrer`
//     // connexion.textContent = `S'ENREGISTRER`
// })
