const disableSmoothScroll = () => {
  cy.document().then(document => {
    const node = document.createElement('style');
    node.innerHTML = 'html { scroll-behavior: inherit !important; }';
    document.body.appendChild(node);
  });
};


describe("Homepage", () => {
  it("should look good", () => {
    cy.visit("/");
    disableSmoothScroll();
    cy.compareSnapshot('Home Page', {
      capture: 'fullPage',
      errorThreshold: 0.1
    });
  })
});
