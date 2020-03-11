/// <reference types="cypress" />

describe('All Signup tests with underlying functions',function()
{

   beforeEach(function()
   {
      cy.visit('https://classic.freecrm.com/register/');
   })
    
   it('As a sign user,i shouldnot be able to click on submit button right away after redirecting to the sign up screen',function()
   {
    cy.contains('SUBMIT').should('be.disabled'); 
   })

   it('As a sign up user,i should be able to see all the required options in Edition Dropdown',function()
   {
     cy.get('#payment_plan_id').should('contain','Edition')
     cy.get('#payment_plan_id').should('contain','Free Edition')
     cy.get('#payment_plan_id').should('contain','CRMPRO - $29.95 user/mo.')
   })

   it('As a sign up user,i shouldnt be able to select Edition value from the Edition Dropdown',function()
   {
    cy.get('#payment_plan_id').contains('Edition').should('be.disabled');
   })

   it('As a sign up user,i should be able to select any of the appropriate values from Edition dropdown without any issues',function()
   {
       cy.get('select').select('Free Edition');
   })

   it.only('As a sign up user,i should be able to see the submit button enabled after passing the values in any of required fields',function()
   {
      cy.contains('SUBMIT').should('be.disabled'); 
      cy.get('select').select('Free Edition');
      cy.contains('SUBMIT').should('be.enabled'); 
   })


   


   


})