describe('testing w3school', () => {
  it('passes', () => {
    cy.visit('https://www.w3schools.com/html')
    describe('Test W3Schools Logo', () => {
      it('Should interact with the W3Schools logo', () => {
        cy.visit('https://www.w3schools.com');
        cy.get('#navbtn_tutorials').click();
        cy.get('#accept-choices').should('not.exist');
        cy.get('a.ws-btn.acclink-text.ga-top-drop.ga-top-drop-tut-react')
        .should('have.attr', 'href', '/react/default.asp') 
        .click();  
        cy.get('#accept-choices').click();
        cy.get('#tnb-google-search-input').type('React');
        cy.get('#tnb-google-search-submit-btn').click();
        cy.get('.tnb-signup-btn').click();
        cy.get('input[placeholder="email"]').type('luyandatwala158@gmail.com');
        cy.get('input[placeholder="password"]').type('WeSchool');
        cy.get('input[placeholder="first name"].SignUpForm_signup_input__6r1Lr').type('Candice');
        cy.get('input[placeholder="last name"].SignUpForm_signup_input__6r1Lr').type('Merlin');
        cy.contains('button', 'Sign Up').click();
        cy.get('input[type="checkbox"]').click();
        cy.get('.LoginPanel_login__xVuiB').click();
        cy.contains('Google').click();
      });
    });
  
  })
})