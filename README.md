npm init -y initiate testing 
npm install cypress 
    npx cypress -v shows which version of cypress
    npx cypres verify - verifies its working 
    npx cypress open create project structure 

    cy is a cypress command that holds all the cypress methods
    "watchForFileChanges": false 
        (if you don't want it to automatically update to your latest code changes) 

        cypress.io look at configuration options and settings 
        Cypress configuration documentation
        https://docs.cypress.io/guides/references/configuration#Testing-Type-Specific-Overrides

        Cypress Keyboard options on site documentation

IDE commands
    cy.visit('URL')
    cy.get('.class')
    cy.get(.class')type('1234')  (types text into a box)
    cy.get('.class').click()

inline times outs -- cy.get('.className, {timeout: 5000}type('123'){enter}')
can add global timesouts in the cypress.config.js
cy.wait()

**Google: cypress interacting with elements - different commands on elements

Verify the title of a page: cy.title().should('eq','my page')

Questions:
get vs. containts?
For authorized user accounts do you always have to have a login step?
What about optional steps? (first time I log in I select CPA group but I don't have to after the first time)
