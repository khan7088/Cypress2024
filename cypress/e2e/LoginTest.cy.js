/// <reference types="cypress" />

describe('Visit to the Landing page',function(){
  beforeEach(()=>{
    cy.visit("https://practice.expandtesting.com/login");
    
  })
  it('wrong username & Password',()=>{
  
   const userName = cy.get('#username').click().type('test1') ;
   const Password =  cy.get('#password').click().type('test1#987');
   userName.clear();
   Password.clear();
    cy.xpath("//button[@type='submit']").click();
    cy.get('#flash').should("contain","Your username is invalid!") ; // Assertion
})
it('wrong username and correct Password',()=>{
  
    cy.get('#username').click().type('test1') ;
    cy.get('#password').click().type('SuperSecretPassword!');
    cy.xpath("//button[@type='submit']").click();   
    cy.get('#flash').should("contain","Your username is invalid!") ; // Assertion

     
})
it('correct username and wrong Password',()=>{
 
   cy.get('#username').click().type('practice') ;
    cy.get('#password').click().type('SuperSecret');
   
    cy.xpath("//button[@type='submit']").click();
    cy.get('#flash').should("contain","Your password is invalid!") ; // Assertion

})
it('correct username and  Password',()=>{
 
   cy.get('#username').click().type('practice') ;
   cy.get('#password').click().type('SuperSecretPassword!');
    
    cy.xpath("//button[@type='submit']").click();   
    cy.get('#flash').should("contain","You logged into a secure area!") ; // Assertion
})


    
})


