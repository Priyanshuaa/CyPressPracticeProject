/// <reference types="cypress" />

import { Homepage } from "../pages/homepage";

const homepage=new Homepage();

describe('All Login tests with underlying functions',function()
{
   beforeEach(function()
   {
      homepage.initialize('https://www.crmpro.com/');
   })

it('As a login user,i should be able to redirect to the CRM home page after passing the valid username,password and hitting login button',function(){
   homepage.login('batchautomation','Test@12345')
   homepage.validatehomepageurl();
   //cy.visit('https://www.amazon.com/');
   //cy.visit('https://www.crmpro.com/?delay-.nav > :nth-child(2) > a=5000')
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
      homepage.validatehomepagetitle()
})

it('As a login user,i should be able to see signup option on login screen',function(){
     homepage.validateoptionshomepage()
})

it('As a login user,i should be on the home page only after passing valid username and invalid password',function(){

   homepage.login('batchautomation','Test@1234545454545');
   homepage.validateloginpageurl();
})

it('As a login user,i should be on the home page only after passing invalid username and valid password',function(){

    homepage.login('batchautomation1211221212','Test@12345');
    homepage.validateloginpageurl();
})

it('As a login user,i should be on the home page only after passing blank username and password',function(){
   cy.get('.btn').click();
   homepage.validateloginpageurl();
})

})