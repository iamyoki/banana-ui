describe('home page', () => {
  before(() => {
    cy.visit('/');
  });

  after(() => {
    cy.visit('/');
  });

  it('should be able to visit and visible', () => {
    cy.get('body').should('be.visible');
  });

  it('should has a `Getting Started` button', () => {
    cy.get('button')
      .contains(/getting started/i)
      .should('be.visible');
  });

  it('should clicks button to visit docs', () => {
    cy.get('button')
      .contains(/getting started/i)
      .click();
    cy.location('pathname').should('eq', '/intro/introduce');
    cy.contains('介绍').should('be.visible');
  });
});
