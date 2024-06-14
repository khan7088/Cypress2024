/// <reference types="cypress" />
import selector from '../fixtures/selector.js';

describe('Visit to the Landing page',function(){
  beforeEach(()=>{
    cy.visit("https://practice.expandtesting.com/login");
   
    
  })
  it('wrong username & Password',()=>{
  

cy.get(selector.username).clear().type('test1');
 cy.get(selector.password).clear().type("test1#987");
    cy.get(selector.submit).click();
    cy.get(selector.flashId).should("contain","Your username is invalid!") ; // Assertion
})
it('wrong username and correct Password',()=>{
  
 
  cy.get(selector.username).clear().type('test1');
  cy.get(selector.password).clear().type("SuperSecretPassword!");
     cy.get(selector.submit).click();
     cy.get(selector.flashId).should("contain","Your username is invalid!") ;
     
})
it('correct username and wrong Password',()=>{
 
 
  cy.get(selector.username).clear().type('practice');
 cy.get(selector.password).clear().type("SuperSecret");
    cy.get(selector.submit).click();
    cy.get(selector.flashId).should("contain","Your password is invalid!") ; //Assertion
   

})
it('correct username and  Password',()=>{
 

  cy.get(selector.username).type('practice');
 cy.get(selector.password).clear().type("SuperSecretPassword!");
 cy.get(selector.submit).click();
 #cy.get(selector.flashId).should("contain","You logged into a secure area!") ;


})


    
})


