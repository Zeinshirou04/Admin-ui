
it("Tidak dapat mengakses dasboard tanpa login", () => {
    cy.visit("http://localhost:5173/dashboard");
    cy.url().should("include", "/login");
})

describe("Dashboard Overview", { testIsolation: false }, () => {
    beforeEach(() => {
        cy.session("Session Login", () => {
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
            cy.wait(1000);
        })
    });

    it("Periksa apakah berhasil masuk dashboard dan terdapat sebuah notif login sukses", () => {
        cy.url().should("include", "/dashboard");
        cy.get("span#notifMsg").should("have.text", "Login Success")
    });
    it("Periksa apakah button overview saat ini aktif", () => {
        cy.url().should("include", "/dashboard");
        cy.get("button#overview").should("have.class", "bg-primary")
    });
    it("Periksa apakah terdapat card Total Balance", () => {
        cy.url().should("include", "/dashboard");
        cy.get("div#total")
            .within(($header) => {
                cy.get("h2")
                    .should("have.text", "Total balance");
            });
        cy.get("div#total")
            .within(($div) => {
                cy.get("h4")
                    .should("have.text", "All Accounts");
                cy.get("button")
                    .eq(1)
                    .should("have.attr", "tabindex", "0")
                    .should("have.class", "MuiButton-textSizeSmall")
                    .click();
            });
    });
    it("Periksa apakah terdapat card Goals", () => {
        cy.url().should("include", "/dashboard");
        cy.get("div#goals")
            .within(($header) => {
                cy.get("h2")
                    .should("have.text", "Goals");
            });
    });
    it("Periksa apakah terdapat card Upcoming Bill", () => {
        cy.url().should("include", "/dashboard");
        cy.get("div#upcoming")
            .within(($header) => {
                cy.get("h2")
                    .should("have.text", "Upcoming Bill");
            });
    });
    it("Periksa apakah terdapat card Recent Transactions", () => {
        cy.url().should("include", "/dashboard");
        cy.get("div#recent")
            .within(($header) => {
                cy.get("h2")
                    .should("have.text", "Recent Transaction");
            });
    });
    it("Periksa apakah terdapat card Statistics", () => {
        cy.url().should("include", "/dashboard");
        cy.get("div#statistics")
            .within(($header) => {
                cy.get("h2")
                    .should("have.text", "Statistics");
            });
    });
    it("Periksa apakah terdapat card Expenses", () => {
        cy.url().should("include", "/dashboard");
        cy.get("div#expenses")
            .within(($header) => {
                cy.get("h2")
                    .should("have.text", "Expenses Breakdown");
            });
    });
    it("Periksa apakah tema dapat digunakan", () => {
        cy.url().should("include", "/dashboard");
        cy.get("aside")
            .within(($div) => {
                cy.get('div')
                    .contains('Themes')
                    .within(($div) => {
                        cy.get('div')
                            .eq(2)
                            .should('have.class', 'bg-[#6A5ACD]')
                            .click();
                    });
            });
    });
    it("Coba untuk logout dan periksa apakah ada loading screen dan tulisan logout success", () => {
        cy.url().should("include", "/dashboard");
        cy.get("aside")
            .within(($div) => {
                cy.get('button#logout')
                    .click();
            });
        cy.get('div#loadingScreen').should("exist");
        cy.get('span#notifMsg').contains("Forbidden");
        cy.wait(1000);
    });
})