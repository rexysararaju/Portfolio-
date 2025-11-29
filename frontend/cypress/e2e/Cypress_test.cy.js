describe("cypress_test2", () => {
  it("tests cypress_test2", () => {
    cy.viewport(1680, 505);
    cy.visit("http://localhost:5173/");
    cy.get("div:nth-of-type(1) > a:nth-of-type(2)").click();
    cy.get("a:nth-of-type(3)").click();
    cy.get("a:nth-of-type(4)").click();
    cy.get("a:nth-of-type(5)").click();
    cy.get("div:nth-of-type(2) > a:nth-of-type(1)").click();
    cy.get("input[type='email']").click();
    cy.get("input[type='email']").type("admin@test.com");
    cy.get("input[type='password']").type("123456");
    cy.get("button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMB
