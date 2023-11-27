describe('Employee Addition Tests', () => {
    it('Should add a new employee with required details', () => {
      // Besuche die Seite, um einen neuen Mitarbeiter hinzuzufügen
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
  
      // Fülle die notwendigen Felder aus
      cy.get('#firstName').type('Max');
      cy.get('#lastName').type('Mustermann');
  
      // Füge ein Bild hinzu
     // cy.get('#photofile').attachFile('path/zum/deinem/bild.jpg');
  
      // Aktiviere das Kontrollkästchen "Anmeldedaten erstellen" und erstelle Anmeldedaten
      cy.get('#chkLogin').check();
      cy.get('#user_name').type('maxmustermann');
      cy.get('#user_password').type('password123');
      cy.get('#re_password').type('password123');
  
      // Abschnitt "Job" - Fülle die Felder aus
      cy.get('#job_job_title').select('Sales Representative');
      cy.get('#job_emp_status').select('Permanent');
      cy.get('#job_eeo_category').select('Sales');
  
      // Setze das Beitrittsdatum
      cy.get('#job_date_of_hire').type('2023-11-19');
  
      // Füge im Abschnitt "Bericht an" einen Vorgesetzten hinzu
      cy.get('#reportto_supervisorName').type('Odis Adalwin');
  
      // Speichern der Mitarbeiterdaten
      cy.get('#btnSave').click();
  
      // Überprüfe, ob der Mitarbeiter erfolgreich erstellt wurde
      cy.url().should('include', 'viewPersonalDetails/empNumber');
      
      // Gehe zur Liste aller Mitarbeiter
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  
      // Filtere nach "Employment Status -> Full-Time Permanent"
      cy.get('#empsearch_employee_status').select('Full-Time Permanent');
  
      // Gib den Namen des Supervisors ein
      cy.get('#empsearch_supervisor_name').type('Odis Adalwin');
  
      // Suche nach dem erstellten Mitarbeiter
      cy.contains('Search').click();
  
      // Überprüfe, ob der Mitarbeiter gefunden wurde
      cy.contains('Max Mustermann').should('exist');
    });
  });
  