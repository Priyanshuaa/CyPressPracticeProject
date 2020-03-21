describe('All function related to Add to Cart module',function()
{
   beforeEach(function()
   {
      //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
   })

it('To locate all the elements on the add to cart screen',function(){
   //To get all the products present on the screen
   cy.wait(2000);   
   //It will search only for the visible elements

   // cy.get('.products:visible').as('productslist').find('.product').should('have.length',30);
   // cy.get('@productslist').find('.product').should('have.length',30);
   // cy.get('@productslist').find('.product').eq(1).contains('ADD TO CART').click().then(function()
   // {
   //    cy.log('FIRE NOW');
   // })
   // cy.get('.products:visible').find('.product').each(($el, index, $list) => {
 
   // const textVeg=$el.find('h4.product-name').text()
   // if(textVeg.includes('Walnuts'))
   // {
   // $el.find('button').click()
   // }
   // })

   // console.log('DUMMY TEXT ON THE CONSOLE')

   // cy.get('.brand').then(function(logoel)
   // {
   //    cy.log(logoel.text())

   // })


   //Check and Uncheck Box implementation
   // cy.get("input[type='checkbox']").check(['option1','option2'])
   // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
   // cy.get('#checkBoxOption1').check().uncheck().should('not.be.checked');

   //cy.get('#ui-id-1').find('.ui-menu-item-wrapper').should('have.length.greaterThan',30);
   // cy.get("input[id='autocomplete']").type('in');
   // cy.get('.ui-menu-item').find('.ui-menu-item-wrapper').each(($e1, index, $list) => {
 
   //    const textVeg=$e1.text()
   //    if(textVeg===('India'))
   //    {
   //       $e1.click()
   //    }
   //    })
   // cy.get('#ui-id-1').find('.ui-menu-item').should('have.length.greaterThan',30);

   // cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
   //    if($e1.text()==="India")
   //    {
   //        $e1.click()
   //    }
   
   
//   })

//Autocomplete
// cy.get('#autocomplete').should('have.value','India')
// //visible invisible
// cy.get('#displayed-text').should('be.visible')
// cy.get('#hide-textbox').click()
// cy.get('#displayed-text').should('not.be.visible')
// cy.get('#show-textbox').click()
// cy.get('#displayed-text').should('be.visible')
 
//Radio buttons
 
// cy.get('[value="radio2"]').check().should('be.checked')
// const stub1 = cy.stub();
// cy.on('window:alert', stub1);
// cy.get('#alertbtn').click().then(() => {
// expect(stub1.getCall(0)).to.be.calledWith('Hello , share this practice page and share your knowledge')
//  });

//  const stub2 = cy.stub();
// cy.on('window:confirm', stub2);
// cy.get('#confirmbtn').click().then(() => {
// expect(stub2.getCall(0)).to.be.calledWith('Hello , Are you sure you want to confirm?')
//  });


//  const stub2 = cy.stub();
// cy.on('window:confirm', stub2);
// cy.get('#confirmbtn').click().then(() => {
// expect(stub2.getCall(0)).to.be.calledWith(false)
//  });

// cy.get('#opentab').invoke('removeAttr','target').click();
// cy.go('back');
// cy.wait(2000);
// cy.get('#openwindow').invoke('removeAttr','target').click();

//legend[contains(text(),'Web Table Example')]

cy.get('legend').contains('Web Table Example').should('have.not.be.hidden');

cy.get('.table-display tbody tr td').each(($e1, index, $list) => {
 
      if($e1.text()==="Learn SQL in Practical + Database Testing from Scratch")
      {
          cy.get('.table-display tbody tr td').eq(index).next().then(function(price)
          {
             const prices=price.text()
             expect(prices).equal('25');
          })
      }
   
   
  })






})

})