describe('introduce page', () => {
  beforeEach(() => {
    cy.visit('/intro');
  });

  it('should be able to visit and visible', () => {
    cy.get('body').should('be.visible');
  });

  it('clicks side menu to change', () => {
    cy.contains('安装').click();
    cy.get('h1').contains('安装').should('be.visible');
  });

  it('clicks goto next page', () => {
    cy.visit('/intro/install');
    cy.contains('下一章').find('a').click();
    cy.get('h1').contains('开始使用').should('be.visible');
  });
});
