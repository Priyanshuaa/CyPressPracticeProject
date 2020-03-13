export class Homepage
{
     initialize(url)
     {
        cy.visit(url);
     }
  
     login(username,password)
     {
        cy.get('#loginForm > div > input:nth-child(1)').type(username);
        cy.get('#loginForm > div > input:nth-child(1)').should('have.value',username);
        cy.get('#loginForm > div > input:nth-child(2)').type(password);
        cy.get('.btn').click(); 
     }

     validatehomepagetitle()
     {
      cy.title().should('have.include','CRMPRO  - CRM software for customer relationship management, sales, and support.');
   }

     validatehomepageurl()
     {
        cy.url().should('include','https://www.crmpro.com/index.cfm?CFID=');
     }

     validateoptionshomepage()
     {
      cy.get('#navbar-collapse').contains('Pricing');
      cy.get('#navbar-collapse').contains('Sign Up');
      cy.get('#navbar-collapse').contains('Features');
      cy.get('#navbar-collapse').contains('Home');
      cy.get('#navbar-collapse').contains('Customers');
      cy.get('#navbar-collapse').contains('Contact');
     }

     validateloginpageurl()
     {
      cy.url().should('eq','https://www.crmpro.com/index.html?e=1');
     }

}
