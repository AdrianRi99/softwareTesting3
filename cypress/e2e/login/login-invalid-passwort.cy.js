// cypress/integration/login.spec.js

describe('Login Tests', () => {
    it('Should show an error message for invalid password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('.oxd-input.oxd-input--focus').type('admin');
      cy.get('input[type="password"]').type('invalidpassword');
      cy.get('button[type="submit"]').click();
      cy.contains('Invalid credentials').should('be.visible');
    });
  });
