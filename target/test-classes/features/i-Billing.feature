
 
 @i-BillingLoginFeature
Feature: Techfios otherlogin functioality validation
 
 
 Background:#
Given User is on techfios login page


@OtherScenario1
Scenario Outline: 1 User should be able to login with valid credential
When User enters username as"<username>"
When User enters password as "<password>"
When User clicks on signin button
Then User should land on dashboard page
And User clicks on bankCash
And User clicks on newAccount
Then User should land on Account Page
And User enters "<accountTitle>" in accounts page
And User enters "<description>" in account pages
And User enters "<initialBalance>"in accounts pages
And User enters "<accountNumber>" in account page
And User enters "<contactPerson>" on account page
And User enters "<Phone>" on accounts page
And User enyers "<iternetBankingURL>" on accounts pages
And User click on Submit button
Then User should be able to validate account created successfully
 Examples:
 |username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|iternetBankingURL|
 |demo@techfios.com|abc123|Feroza homework|Monthly Savings|1500|070707|Nilima Rupa|0124575252|http//techfios.com|