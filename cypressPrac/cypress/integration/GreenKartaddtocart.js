describe('All function related to Add to Cart module',function()
{
   beforeEach(function()
   {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
   })

it('To locate all the elements on the add to cart screen',function(){
   //To get all the products present on the screen
   cy.wait(2000);   
   //It will search only for the visible elements
   // cy.get('.products:visible').find('.product').should('have.length',30);
   // cy.get('.products').find('.product').should('have.length',30);
   //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
cy.get('.products').find('.product').each(($el, index, $list) => {
 
   const textVeg=$el.find('h4.product-name').text()
   if(textVeg.includes('Cashews'))
   {
   $el.find('button').click()
   }
   })

})

})