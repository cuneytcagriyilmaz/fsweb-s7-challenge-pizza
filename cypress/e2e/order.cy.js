describe('Order Form Submission', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/order');
  });

  it('should successfully submit the order form', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="size"][value="Orta"]').check();
    cy.get('select[name="doughThickness"]').select('Orta');
    cy.get('input[name="Pepperoni"]').check();
    cy.get('input[name="Mısır"]').check();
    cy.get('input[name="Sarımsak"]').check();
    cy.get('input[name="Kabak"]').check();
    cy.get('textarea[name="note"]').type('Ekstra kaşar peyniri ekleyin');

    cy.get('button[type="submit"]').click({ force: true })
    cy.intercept('POST', 'https://reqres.in/api/pizza').as('postPizza');
    cy.wait('@postPizza').then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
      cy.log('API Response:', interception.response.body);
      cy.url().should('include', '/Result');
    });
  });
});
