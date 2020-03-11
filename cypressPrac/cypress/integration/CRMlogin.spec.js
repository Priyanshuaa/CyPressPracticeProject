/// <reference types="cypress" />

describe('All Login tests with underlying functions',function()
{
   beforeEach(function()
   {
      cy.visit('https://www.crmpro.com/');
   })

it('As a login user,i should be able to redirect to the CRM home page after passing the valid username,password and hitting login button',function(){
   //cy.visit('https://www.amazon.com/');
   //cy.visit('https://www.crmpro.com/?delay-.nav > :nth-child(2) > a=5000')
   cy.get('#loginForm > div > input:nth-child(1)').type('batchautomation');
   cy.get('#loginForm > div > input:nth-child(1)').should('have.value','batchautomation');
   cy.get('#loginForm > div > input:nth-child(2)').type('Test@12345');
   cy.get('.btn').click();   
   cy.url().should('include','https://www.crmpro.com/index.cfm?CFID=');
   //cy.contains('Sign Up').click()
   //cy.get('#twotabsearchtextbox').type('Laptops')
   //cy.wait(5000);
   //cy.contains('nav-search-submit nav-sprite').click
   //cy.get('.nav-logo-link > .nav-logo-base').click()
   //cy.get('.nav > :nth-child(2) > a').click()
   //cy.get('.nav-search-submit > .nav-input').click()
   //cy.contains('username').type('Priyanshua')
   //cy.get('#twotabsearchtextbox').type('Laptops')
   //cy.wait(2000);
   //cy.get('#twotabsearchtextbox').type('Laptops').click;
   //let searchicon=cy.get('#nav-search-submit-text',{timeout :6000});
   //searchicon.click;
})

it('As a login user,i should be able to redirect to the login after hitting the URL',function(){
   cy.title().should('have.include','CRMPRO  - CRM software for customer relationship management, sales, and support.');
})

it('As a login user,i should be able to see signup option on login screen',function(){
   cy.get('#navbar-collapse').contains('Pricing');
   cy.get('#navbar-collapse').contains('Sign Up');
   cy.get('#navbar-collapse').contains('Features');
   cy.get('#navbar-collapse').contains('Home');
   cy.get('#navbar-collapse').contains('Customers');
   cy.get('#navbar-collapse').contains('Contact');
})

it('As a login user,i should be on the home page only after passing valid username and invalid password',function(){

   cy.get('#loginForm > div > input:nth-child(1)').type('batchautomation');
   cy.get('#loginForm > div > input:nth-child(2)').type('Test@1234545454545');
   cy.get('.btn').click();
   cy.url().should('eq','https://www.crmpro.com/index.html?e=1');
})

it('As a login user,i should be on the home page only after passing invalid username and valid password',function(){

   cy.get('#loginForm > div > input:nth-child(1)').type('batchautomation1211221212');
   cy.get('#loginForm > div > input:nth-child(2)').type('Test@12345');
   cy.get('.btn').click();
   cy.url().should('eq','https://www.crmpro.com/index.html?e=1');
})

it('As a login user,i should be on the home page only after passing blank username and password',function(){
   cy.get('.btn').click();
   cy.url().should('eq','https://www.crmpro.com/index.html?e=1');
})

})