// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
Cypress.Commands.add('adjusterLogin', (adjuster,{cacheSession = true} ={}) =>{
  cy.fixture('login').then(login => {
    const username=login.adjuster_username
    const password=login.adjuster_password
    cy.visit('https://workshop.dev.homee.com/login/customer')
    cy.get('#login-email').type(username)
    cy.get('#login-password').type(password)
    cy.get('[type=submit]').click()
  })
})
Cypress.Commands.add('consumerLogin', () =>{
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.fixture('login').then(login => {
    const username=login.consumer_username
    const password=login.consumer_password
    cy.visit('https://workshop.dev.homee.com/login/customer')
    cy.get('#login-email')
    .type(username)
    cy.get('#login-password')
    .type(password)
    cy.get('[type=submit]').click()
  })
})
Cypress.Commands.add('internalLogin', () =>{
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.fixture('login').then(login => {
    const username=login.internal_username
    const password=login.internal_password
    cy.visit('https://workshop.dev.homee.com/login/internal')
    cy.get('#login-email')
    .type(username)
    cy.get('#login-password')
    .type(password)
    cy.get('[type=submit]').click()
  })
})
Cypress.Commands.add('providerLogin', () =>{
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.fixture('login').then(login => {
    const username=login.provider_username
    const password=login.provider_password
    cy.get('#login-email')
    .type(username)
    cy.get('#login-password')
    .type(password)
    cy.get('[type=submit]').click()
  })
})
Cypress.Commands.add('demoLogin', () =>{
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.fixture('login').then(login => {
    const username=login.demo_username
    const password=login.demo_password
    cy.get('#login-email')
    .type(username)
    cy.get('#login-password')
    .type(password)
    cy.get('[type=submit]').click()
  })
})
let LOCAL_STORAGE_MEMORY = {};
Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key]
  })
})
Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
  })
})