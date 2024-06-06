/// <reference types="cypress" />

describe('Visit to the Landing page',function(){
  beforeEach(()=>{
    cy.visit("https://practice.expandtesting.com/login");
    
  })
  it('wrong username & Password',()=>{
  
  // cy.get('#username').click().type('test1') ;
  // cy.get('#password').click().type('test1#987');
  cy.get('input[name = "username"]').clear().type('test1');
  cy.get('input[type="password"]').clear().type('test1#987');
    cy.get("button[type='submit']").click();
    cy.get('#flash').should("contain","Your username is invalid!") ; // Assertion
})
it('wrong username and correct Password',()=>{
  
   // cy.get('#username').click().type('test1') ;
   // cy.get('#password').click().type('SuperSecretPassword!');
  cy.get("input[name = 'username']").clear().type('test1');
  cy.get("input[type = 'password']").clear().type('SuperSecretPassword');
    // cy.xpath("//button[@type='submit']").click();   
    cy.get("button[type='submit']").click();
    cy.get('#flash').should("contain","Your username is invalid!") ; // Assertion

     
})
it('correct username and wrong Password',()=>{
 
  //  cy.get('#username').click().type('practice') ;
  //   cy.get('#password').click().type('SuperSecret');
  //  cy.xpath("//button[@type='submit']").click();
  cy.get("input[name = 'username']").type('practice');
  cy.get("input[type = 'password']").type('SuperSecret');
  cy.get("button[type='submit']").click();
    cy.get('#flash').should("contain","Your password is invalid!") ; // Assertion

})
it('correct username and  Password',()=>{
 
  //  cy.get('#username').click().type('practice') ;
  //  cy.get('#password').click().type('SuperSecretPassword!');
  //   cy.xpath("//button[@type='submit']").click();   

  cy.get("input[name = 'username']").type('practice') ;
  cy.get("input[type = 'password']").type('SuperSecretPassword!');
  cy.get("button[type='submit']").click();

    cy.get('#flash').should("contain","You logged into a secure area!") ; // Assertion
})


    
})


