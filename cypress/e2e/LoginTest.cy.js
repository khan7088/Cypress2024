/// <reference types="Cypress" />

describe('Visit to the Landing page',function(){
    it("Landing page",()=>{
        cy.visit("https://practice.expandtesting.com/login");
    })
})

describe("Prividing wrong credential",()=>{
    it('wrong username & Password',()=>{
            cy.visit("https://practice.expandtesting.com/login");
            cy.get('#username').click().type('test1') ;
            cy.get('#password').click().type('test1#987');
            cy.xpath("//button[@type='submit']").click();
            cy.get('#flash').should("contain","Your username is invalid!") ; // Assertion
    })
})

describe("Prividing wrong username",()=>{
    it('wrong username and correct Password',()=>{
            cy.visit("https://practice.expandtesting.com/login");
            cy.get('#username').click().type('test1') ;
            cy.get('#password').click().type('SuperSecretPassword!');
            cy.xpath("//button[@type='submit']").click();   
            cy.get('#flash').should("contain","Your username is invalid!") ; // Assertion

             
    })
})

describe("Prividing wrong password",()=>{
    it('correct username and wrong Password',()=>{
            cy.visit("https://practice.expandtesting.com/login");
            cy.get('#username').click().type('practice') ;
            cy.get('#password').click().type('SuperSecret');
            cy.xpath("//button[@type='submit']").click();
            cy.get('#flash').should("contain","Your password is invalid!") ; // Assertion
    
    })
})

describe("Prividing correct username & Password",()=>{
    it('correct username and  Password',()=>{
            cy.visit("https://practice.expandtesting.com/login");
            cy.get('#username').click().type('practice') ;
            cy.get('#password').click().type('SuperSecretPassword!');
            cy.xpath("//button[@type='submit']").click();   
            cy.get('#flash').should("contain","You logged into a secure area!") ; // Assertion
    })
})