describe('Campaigns page', () => {
  it('lists existing campaigns', () => {
    cy.visit('/');
    cy.contains('h2', 'Winter welcome').should('be.visible');
    cy.contains('WINTER15').should('be.visible');
  });
});
