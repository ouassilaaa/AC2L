import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(100)

describe('Formulaire',
() => {
  it('texte existant et correct', () => {
    //paramètrage de la page web
    cy.visit('http://localhost:3000/inscription')

    //test si mon titre existe dans le DOM et s'il est correct
    cy.get('[data-testid="cypress-title"]').should('exist').should('have.text',"Formulaire de pré-adhésion");
     });

     it('utilisateur saisi les informations', () => {
      //paramètrage de la page web
      cy.visit('http://localhost:3000/inscription')

      //récupération et saisie dans les inputs
      cy.get(':input[name="name"]').type('Messaoui')
      cy.get(':input[name="surname"]').type('Ouassila')
      cy.get(':input[name="mobile"]').type('0612478563')
      cy.get(':input[name="email"]').type('ouassilapro31@gmail.com')

      //clic sur le bouton submit
      cy.get(':input[name="submit"]').click()

    }); 

    it('informations manquantes', ()=>{
      cy.visit('http://localhost:3000/inscription')
      cy.get(':input[name="email"]').type('test@test.com')
      cy.get(':input[name="submit"]').click()
      // verifier alert
      cy.on('window:alert',(t)=>{
        expect(t).to.contains('Veuillez renseigner votre nom'); })
    });



})