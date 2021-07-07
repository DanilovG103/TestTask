describe("renders", () => {
    it ("renders correctly", () => {
        cy.visit("/")
        cy.get("main").should("exist")
    })

    it ("buttons works correctly" , () => {
        cy.visit("/")
        cy.get("main").should("exist")
        cy.get("#btn1").click()
        cy.get("#btn4").click()
        cy.visit("/")
    })

    it ("input works correctly" , () => {
        cy.visit("/")
        cy.get("main").should("exist")
        cy.get("#opInput").type("something")
        cy.get("#to-form-btn").click()
    })

    it ("inputs validates correctly", () => {
        cy.visit("/")
        cy.get("main").should("exist")
        cy.get("#btn1").click()
        if (cy.get("#pay").should("have.attr", "disabled") == true) {
            cy.get("#money").type("9999")
            cy.get("#phone").type("9999999999")
            if (cy.get("#pay").should("have.attr", "disabled") == true) {
                cy.get("#money").type("999")
                cy.get("#phone").type("9999999999")
                cy.get("#pay").click()
            }
        } 
    })
})