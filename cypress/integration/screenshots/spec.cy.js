describe("Homepage", () => {
  it("should look good", () => {
    cy.visit("/");
    cy.compareSnapshot('Home Page', {
      capture: 'fullPage',
      errorThreshold: 20.0
    });
  })
});
