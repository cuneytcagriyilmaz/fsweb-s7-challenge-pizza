describe('OrderNote Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/order');
    });
  
    it('should type text into the name input field and add a note', () => {
      cy.get('input[name="name"]').type('Cuneyt Cagri Yilmaz').should('have.value', 'Cuneyt Cagri Yilmaz');
  
      cy.get('textarea[name="note"]').type('Siparis Notu').should('have.value', 'Siparis Notu');
    });
  });
  