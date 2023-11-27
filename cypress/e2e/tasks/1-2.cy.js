describe('Login Tests', () => {
    it('Should login with valid user and valid password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('[name="username"]').type('admin');
      cy.get('input[type="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', 'dashboard');
      cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
      cy.contains('Add').click();
      cy.get('#mein-dropdown').select('Option 1');





    
    });
  });

  