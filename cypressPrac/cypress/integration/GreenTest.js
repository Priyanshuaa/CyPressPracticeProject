/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {

// cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
// cy.wait(2000)
// cy.get('.products').find('.product').each(($e1, index, $list) => { 

// const textVeg=$e1.find('h4.product-name').text()
// if(textVeg.includes('Brocolli'))
// {
//     $e1.find('button').click()
// }
// })

cy.visit("https://www.amazon.in/s?k=laptops&ref=nb_sb_noss_2")
cy.wait(2000)

cy.get('.sg-row:visible').each(($e1, index, $list) => {

const textVeg=$e1.find('span.a-size-medium.a-color-base.a-text-normale').text()
if(textVeg.includes('Acer'))
{
    $e1.find('button').click()
}
})




})
 
})

