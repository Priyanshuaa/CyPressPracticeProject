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

   it('As a sign up user,i should be able to see the submit button enabled after passing the values in any of required fields',function()
   {
      cy.contains('SUBMIT').should('be.disabled'); 
      cy.get('select').select('Free Edition');
      cy.contains('SUBMIT').should('be.enabled'); 
      cy.reload();
      cy.contains('SUBMIT').should('be.disabled');
   })

   it('As a sign up user,i should be able to see the required validation after keeping all the field blank except some',function()
   {
      cy.get('select').select('Free Edition');
      cy.contains('SUBMIT').click();
      cy.contains('Please enter your first name').should('be.visible');
      cy.contains('Please enter your surname').should('be.visible');
      cy.contains('Please enter your email address').should('be.visible');
      cy.contains('Please confirm your email address').should('be.visible');
      cy.contains('You must select a username').should('be.visible');
      cy.contains('You must select a password').should('be.visible');
      cy.contains('You must confirm your password').should('be.visible');
      cy.contains('You must agree to the Terms and Conditions before continuing').should('be.visible');
   })

   it('As a sign up user,i should be able to redirect to the next sign up screen 2 after entering all the required fields and hitting submit button',function()
   {
      cy.get('select').select('Free Edition');
      cy.get('input[name="first_name"]').type('Firstyoo');
      cy.get('input[name="surname"]').type('Lastyoo');
      cy.get('input[name="email"]').type('yoos_124@yopmail.com');
      cy.get('input[name="email_confirm"]').type('yoos_124@yopmail.com');
      cy.get('input[name="username"]').type('yoos1134');
      cy.get('input[name="password"]').type('Chetu@1234');
      cy.get('input[name="passwordconfirm"]').type('Chetu@1234');
      cy.get('input[name="agreeTerms"]').check();
      cy.contains('SUBMIT').click();
      cy.url().should('include','https://classic.freecrm.com/register/?step=2&CFID=');
   })

   it.only('As a sign up user,i should be able to redirect to the sign up screen 3 after entering all the required fields and hitting continue button from profiling screen',function()
   {
      cy.get('select').select('Free Edition');
      cy.get('input[name="first_name"]').type('Firstyoo');
      cy.get('input[name="surname"]').type('Lastyoo');
      cy.get('input[name="email"]').type('yoos_125@yopmail.com');
      cy.get('input[name="email_confirm"]').type('yoos_125@yopmail.com');
      cy.get('input[name="username"]').type('yoos1139');
      cy.get('input[name="password"]').type('Chetu@12345');
      cy.get('input[name="passwordconfirm"]').type('Chetu@12345');
      cy.get('input[name="agreeTerms"]').check();
      cy.contains('SUBMIT').click();
      cy.url().should('include','https://classic.freecrm.com/register/?step=2&CFID=');
      cy.get('input[name="company_name"]').type('INFOSYS');
      cy.get('input[name="phone"]').type('9958948650');
      cy.get('input[name="fax"]').type('yoos_124900@yopmail.com');
      cy.get('input[name="website"]').type('yoos_1245667@yopmail.com');
      cy.get('input[name="company_email"]').type('yoos1134@yopmail.com');
      cy.get('textarea[name="service"]').type('TECHINICIAN');
      cy.get('textarea[name="address"]').type('miami,florida');
      cy.get('input[name="city"]').type('Florida');
      cy.get('input[name="state"]').type('Miami');
      cy.get('input[name="postcode"]').type('33027');
      cy.get('select').select('United States of America');
      cy.contains('CONTINUE').click();
      cy.url().should('include','https://classic.freecrm.com/register/?step=4&CFID=');

      cy.get('input[name="first_name"]').type('Firstyoo');
      cy.get('input[name="surname"]').type('Lastyoo');
      cy.get('input[name="email"]').type('yoos_125@yopmail.com');
      cy.get('input[name="email_confirm"]').type('yoos_125@yopmail.com');
      cy.get('input[name="username"]').type('yoos1139');
      cy.get('input[name="password"]').type('Chetu@12345');
      cy.get('input[name="passwordconfirm"]').type('Chetu@12345');


   })



})