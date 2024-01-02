describe('template spec', () => {
    beforeEach(() => {
        cy.visit('profile');
    });
    it('passes', () => {
        cy.visit('https://example.cypress.io');
    });
});
