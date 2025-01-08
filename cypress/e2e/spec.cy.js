describe("User login", () => {
    it("Sistem dapat login dengan credentials yang valid", () => {
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
    });

    it("Sistem tidak dapat login dengan credentials yang tidak valid", () => {
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

    it("Sistem dapat melakukan validasi input email tidak boleh kosong", () => {
        cy.visit("http://localhost:5173/");

        cy.url().should("include", "/login");

        cy.get("input#email")
            .should("be.visible")
            .should("have.attr", "placeholder", "hello@example.com")
            .type("asdad")
            .should("have.value", "asdad")
            .clear();

        cy.get("input#password")
            .should("be.visible")
            .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
            .type("123")
            .should("have.value", "123");

        cy.get("div#errEmail").contains("Email address is required");

        cy.get('input[type="submit"]').should("have.value", "Login").should("have.attr", "disabled");

    });

    it("Sistem dapat melakukan validasi input password tidak boleh kosong", () => {
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
            .should("have.value", "123")
            .clear();

        cy.get('input[type="submit"]').should("have.value", "Login").should("have.attr", "disabled");

        cy.get("div#errPassword").contains("Password is required");
    });

    it("Sistem dapat melakukan validasi input email dengan format tertentu", () => {
        cy.visit("http://localhost:5173/");

        cy.url().should("include", "/login");

        cy.get("input#email")
            .should("be.visible")
            .should("have.attr", "placeholder", "hello@example.com")
            .type("mainkekotabatu")
            .should("have.value", "mainkekotabatu");

        cy.get("div#errEmail").contains("Invalid email address format");
    });
});

describe("Dashboard Overview", () => {
    it("Tidak dapat mengakses dasboard tanpa login", () => {
        cy.visit("http://localhost:5173/dashboard");
        cy.url().should("include", "/login");
    })

    // beforeEach(() => {
    //     cy.session("")
    // })
})