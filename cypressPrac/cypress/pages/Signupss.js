export class Signup {
    initializes(urls) {
        cy.visit(urls);
        //cy.visit('https://classic.freecrm.com/register/');
    }

    submitbtndisable() {
        cy.contains('SUBMIT').should('be.disabled');
    }

    submitbtnenable() {
        cy.contains('SUBMIT').should('be.enabled');
    }

    Reload() {
        cy.reload();
    }

    validateEditiondrpdown(editions, freeedition, crmpro) {
        //cy.get('#payment_plan_id').should('contain','Edition')
        //cy.get('#payment_plan_id').should('contain','Free Edition')
        //cy.get('#payment_plan_id').should('contain','CRMPRO - $29.95 user/mo.')
        cy.get('#payment_plan_id').should('contain', editions);
        cy.get('#payment_plan_id').should('contain', freeedition);
        cy.get('#payment_plan_id').should('contain', crmpro);
    }

    validatdisabledition() {
        cy.get('#payment_plan_id').contains('Edition').should('be.disabled');
    }

    Selects(option) {
        cy.get('select').select(option);
    }

    enablesubmitbtn(editio) {
        submitbtndisable();
        select(editio);
        submitbtnenable();
        Reload();
        submitbtndisable();
        //cy.contains('SUBMIT').should('be.disabled');
    }
    
    submitbtnclick() {
        cy.contains('SUBMIT').click();
    }
    
    validationsignup1() {    
        cy.contains('Please enter your first name').should('be.visible');
        cy.contains('Please enter your surname').should('be.visible');
        cy.contains('Please enter your email address').should('be.visible');
        cy.contains('Please confirm your email address').should('be.visible');
        cy.contains('You must select a username').should('be.visible');
        cy.contains('You must select a password').should('be.visible');
        cy.contains('You must confirm your password').should('be.visible');
        cy.contains('You must agree to the Terms and Conditions before continuing').should('be.visible');
    }

    signup1(first, last, emailid, emailconfirm, user, pass, confirmpass) {
        cy.get('input[name="first_name"]').type(first);
        cy.get('input[name="surname"]').type(last);
        cy.get('input[name="email"]').type(emailid);
        cy.get('input[name="email_confirm"]').type(emailconfirm);
        cy.get('input[name="username"]').type(user);
        cy.get('input[name="password"]').type(pass);
        cy.get('input[name="passwordconfirm"]').type(confirmpass);
        cy.get('input[name="agreeTerms"]').check();
        // cy.get('input[name="first_name"]').type('Firstyoo');
        // cy.get('input[name="surname"]').type('Lastyoo');
        // cy.get('input[name="email"]').type('yoos_124@yopmail.com');
        // cy.get('input[name="email_confirm"]').type('yoos_124@yopmail.com');
        // cy.get('input[name="username"]').type('yoos1134');
        // cy.get('input[name="password"]').type('Chetu@1234');
        // cy.get('input[name="passwordconfirm"]').type('Chetu@1234');
        // cy.get('input[name="agreeTerms"]').check();
        //cy.url().should('include','https://classic.freecrm.com/register/?step=2&CFID=');
    }

    
    signup2(company, phones, faxs, websites, companyemail, services, addresses, cities, states, postcodes, country) {
        cy.get('input[name="company_name"]').type(company);
        cy.get('input[name="phone"]').type(phones);
        cy.get('input[name="fax"]').type(faxs);
        cy.get('input[name="website"]').type(websites);
        cy.get('input[name="company_email"]').type(companyemail);
        cy.get('textarea[name="service"]').type(services);
        cy.get('textarea[name="address"]').type(addresses);
        cy.get('input[name="city"]').type(cities);
        cy.get('input[name="state"]').type(states);
        cy.get('input[name="postcode"]').type(postcodes);
        // cy.get('input[name="company_name"]').type('INFOSYS');
        // cy.get('input[name="phone"]').type('9958948650');
        // cy.get('input[name="fax"]').type('8787878787');
        // cy.get('input[name="website"]').type('5454554sfggddfhfd');
        // cy.get('input[name="company_email"]').type('yoos0990@yopmail.com');
        // cy.get('textarea[name="service"]').type('TECHINICIAN');
        // cy.get('textarea[name="address"]').type('miami,florida');
        // cy.get('input[name="city"]').type('Florida');
        // cy.get('input[name="state"]').type('Miami');
        // cy.get('input[name="postcode"]').type('33027');
        //cy.get('select').select('United States of America');
        //cy.url().should('include','https://classic.freecrm.com/register/?step=4&CFID=');
    }

    signup3(firstn, lastn, useremail, useremailconfirm, users, passs, confirmpasss, selectuser) {
        cy.get('input[name="first_name"]').type('Firstyoo');
        cy.get('input[name="surname"]').type('Lastyoo');
        cy.get('input[name="email"]').type('yoos333@yopmail.com');
        cy.get('input[name="email_confirm"]').type('yoos333@yopmail.com');
        cy.get('input[name="username"]').type('yoos0070');
        cy.get('input[name="password"]').type('Chetu@123');
        cy.get('input[name="passwordconfirm"]').type('Chetu@123');
        // cy.get('input[name="first_name"]').type('Firstyoo');
        // cy.get('input[name="surname"]').type('Lastyoo');
        // cy.get('input[name="email"]').type('yoos333@yopmail.com');
        // cy.get('input[name="email_confirm"]').type('yoos333@yopmail.com');
        // cy.get('input[name="username"]').type('yoos0070');
        // cy.get('input[name="password"]').type('Chetu@123');
        // cy.get('input[name="passwordconfirm"]').type('Chetu@123');
        // cy.get('select').select('User Administrator');
        // cy.contains('Add User').click();
        // signup3url('https://classic.freecrm.com/register/?step=4&CFID=');
        // cy.url().should('include','https://classic.freecrm.com/register/?step=4&CFID=');
        // cy.get('button[name="finish"]').click();
        // signup4url('https://classic.freecrm.com/register/?step=5');
        //cy.url().should('include','https://classic.freecrm.com/register/?step=5');
    }

    Signup4finishclick() {
        cy.get('button[name="finish"]').click();
    }

    Signup4adduserclick() {
        cy.contains('Add User').click();
    }

    signup4continue() {
    cy.contains('CONTINUE').click();
    }

    waits(time) {
        cy.wait(time);

    }

    signupsurl(signupurlss) {
        //cy.url().should('include','https://classic.freecrm.com/register/?step=2&CFID=');
        cy.url().should('include', signupurl);
    }
}
