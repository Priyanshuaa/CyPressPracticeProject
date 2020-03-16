/// <reference types="cypress" />


import { Signup } from "../pages/Signupss";

const signups=new Signup();

describe('All Signup tests with underlying functions',function()
{
   beforeEach(function()
   {
      signups.initializes('https://classic.freecrm.com/register/');
   })
    
   it('As a sign user,i shouldnot be able to click on submit button right away after redirecting to the sign up screen',function()
   {
      signups.submitbtndisable();
   })

   it('As a sign up user,i should be able to see all the required options in Edition Dropdown',function()
   {
      signups.validateEditiondrpdown('Edition','Free Edition','CRMPRO - $29.95 user/mo.');
   })

   it('As a sign up user,i shouldnt be able to select Edition value from the Edition Dropdown',function()
   {
      signups.validatdisabledition();
   })

   it('As a sign up user,i should be able to select any of the appropriate values from Edition dropdown without any issues',function()
   {
      signups.Selects('Free Edition');
   })

   it('As a sign up user,i should be able to see the submit button enabled after passing values in any of required fields',function()
   {
      signups.submitbtndisable();
      signups.Selects('Free Edition');
      signups.submitbtnenable();
      signups.Reload();
      signups.submitbtndisable();
   })

   it('As a sign up user,i should be able to see the required validation after keeping all the field blank except some',function()
   {
      signups.Selects('Free Edition');
      signups.submitbtnclick();
      signups.validationsignup1();
   })

   it('As a sign up user,i should be able to redirect to the next sign up screen 2 after entering all the required fields and hitting submit button',function()
   {
      signups.Selects('Free Edition');
      signups.signup1("03132020First","03132020last","03132020@yopmail.com","03132020@yopmail.com","03132020","Chetu@123","Chetu@123");
      signups.submitbtnclick();
      signups.signupsurl('https://classic.freecrm.com/register/?step=2&CFID=');
   })

   it('As a sign up user,i should be able to redirect to the sign up screen 3 after entering all the required fields and hitting continue button from profiling screen',function()
   {
      signups.Selects('Free Edition');
      signups.signup1("03132020First","03132020last","031320271234@yopmail.com","031320271234@yopmail.com","031320271234","Chetu@123","Chetu@123");
      signups.submitbtnclick();
      signups.signupsurl('https://classic.freecrm.com/register/?step=2&CFID=');

      signups.signup2('INFOSYS','9958948650','8787878787','5454554sfggddfhfd','yooso09912@yopmail.com','TECHINICIAN','miami florida','Florida','Miami','33027');
      signups.Selects('United States of America');
      signups.signup4continue();
      signups.signupsurl('https://classic.freecrm.com/register/?step=4&CFID=');

      signups.signup3('yoos','yooh','03132020301@yopmail.com','03132020301@yopmail.com','03132020301','Chetu@123','Chetu@123');
      signups.Selects('User Administrator');
      signups.Signup4adduserclick();
      signups.signupsurl('https://classic.freecrm.com/register/?step=4&CFID=');
      
      signups.signup3('yoos','yooh','03132020311@yopmail.com','03132020311@yopmail.com','03132020311','Chetu@123','Chetu@123');
      signups.Selects('User');
      signups.Signup4adduserclick();
      signups.signupsurl('https://classic.freecrm.com/register/?step=4&CFID=');

      signups.Signup4finishclick();

      signups.waits(2000);
      signups.signupsurl('https://classic.freecrm.com/register/?step=5');
   })
   
})