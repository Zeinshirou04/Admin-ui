describe("User login", () => {
    it("should allow user to log in with valid credentials", () => {
        cy.visit("http://localhost:5173/");

        cy.url().should("include", "/login");

        cy.get("input#email")
            .should("be.visible")
            .should("have.attr", "placeholder", "hello@example.com")
            .type("111202214698@mhs.dinus.ac.id")
            .should("have.value", "111202214698@mhs.dinus.ac.id");

        cy.get("input#password")
            .should("be.visible")
            .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
            .type("123456")
            .should("have.value", "123456");

        cy.get('input[type="submit"]').should("have.value", "Login").click();

        cy.get("nav");

        cy.get("header");
    });

    it("should not allow user to log in with invalid credentials", () => {
        cy.visit("http://localhost:5173/");

        cy.url().should("include", "/login");

        cy.get("input#email")
            .should("be.visible")
            .should("have.attr", "placeholder", "hello@example.com")
            .type("111202214698@mhs.dinus.ac.id")
            .should("have.value", "111202214698@mhs.dinus.ac.id");

        cy.get("input#password")
            .should("be.visible")
            .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
            .type("123")
            .should("have.value", "123");

        cy.get('input[type="submit"]').should("have.value", "Login").click();

        cy.get("div").contains("Wrong Password");
    });
});