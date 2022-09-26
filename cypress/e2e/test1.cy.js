/// <reference types = "cypress"/>


it('reachStagingLogin', () =>{
    cy.visit('https://app-stg.reachreporting.com/login')
    cy.get('#username').type('Rick@ReachReporting.com')
    cy.get('#password').type('KWG0dwb0ytv5hnz_dgn')
    .type('{enter}')
    cy.contains('My CPA Group').click()
    cy.contains("Rick's Xero Company #1").click()
    cy.contains('Open').click()
    cy.get(':nth-child(2) > .styledComponents__ButtonLink-sc-jcwtey-2').click()
    cy.get(':nth-child(1) > .ResourceListPanel__Inner-sc-r1rxmb-6 > .Indicators__Container-sc-p5mk86-0').click()

    //cy.contains('Videos').click()
    //cy.contains('Automation Step by Step: NEVER STOP LEARNING').click()
    // cy.contains('Google Search').click()    

})
