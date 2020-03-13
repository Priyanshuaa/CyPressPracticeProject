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
      submitbtndisable();
   })

   it('As a sign up user,i should be able to see all the required options in Edition Dropdown',function()
   {
     validateEditiondrpdown('Edition','Free Edition','CRMPRO - $29.95 user/mo.') 
   })

   it('As a sign up user,i shouldnt be able to select Edition value from the Edition Dropdown',function()
   {
      validatdisabledition()   
   })

   it('As a sign up user,i should be able to select any of the appropriate values from Edition dropdown without any issues',function()
   {
      Selects('Free Edition');
   })

   it('As a sign up user,i should be able to see the submit button enabled after passing values in any of required fields',function()
   {
      submitbtndisable();
      Selects('Free Edition');
      submitbtnenable(); 
      Reload();
      submitbtndisable();
   })

   it('As a sign up user,i should be able to see the required validation after keeping all the field blank except some',function()
   {
      Selects('Free Edition');
      submitbtnclick();
      validationsignup1();
   })

   it('As a sign up user,i should be able to redirect to the next sign up screen 2 after entering all the required fields and hitting submit button',function()
   {
      Selects('Free Edition');
      signup1("03132020First","03132020last","03132020@yopmail.com","03132020@yopmail.com","03132020","Chetu@123","Chetu@123");
      submitbtnclick();
      signupsurl('https://classic.freecrm.com/register/?step=2&CFID=');
   })

   it.only('As a sign up user,i should be able to redirect to the sign up screen 3 after entering all the required fields and hitting continue button from profiling screen',function()
   {
      Selects('Free Edition');
      signup1("03132020First","03132020last","03132020@yopmail.com","03132020@yopmail.com","03132020","Chetu@123","Chetu@123");
      submitbtnclick();
      signupsurl('https://classic.freecrm.com/register/?step=2&CFID=');

      signup2('INFOSYS','9958948650','8787878787','5454554sfggddfhfd','yoos0990@yopmail.com','TECHINICIAN','miami florida','Florida','Miami','33027') 
      Selects('United States of America');
      signup4continue();
      signupsurl('https://classic.freecrm.com/register/?step=4&CFID=');

      signup3('yoos','yooh','03132020-1@yopmail.com','03132020-1@yopmail.com','031320201','Chetu@123','Chetu@123',selectuser);
      Selects('User Administrator');
      Signup4adduserclick();
      signupsurl('https://classic.freecrm.com/register/?step=4&CFID=');
      
      signup3('yoos','yooh','03132020-2@yopmail.com','03132020-2@yopmail.com','031320202','Chetu@123','Chetu@123',selectuser);
      Selects('User Administrator');
      Signup4adduserclick();
      signupsurl('https://classic.freecrm.com/register/?step=4&CFID=');   

      Signup4finishclick();

      waits(2000);
      signupsurl('https://classic.freecrm.com/register/?step=5');
   })

})