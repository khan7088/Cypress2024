describe('Record and Test Suite', () => {
  it('Test1', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('javascript by testerstalk', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.get('#search-input > #search').clear('j');
    cy.get('#search-input > #search').type('javascript by testers talk{enter}');
    /* ==== End Cypress Studio ==== */
  });
})