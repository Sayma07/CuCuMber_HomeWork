$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/i-Billing.feature");
formatter.feature({
  "line": 4,
  "name": "Techfios otherlogin functioality validation",
  "description": "",
  "id": "techfios-otherlogin-functioality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@i-BillingLoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "1 User should be able to login with valid credential",
  "description": "",
  "id": "techfios-otherlogin-functioality-validation;1-user-should-be-able-to-login-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@OtherScenario1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters username as\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should land on Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters \"\u003cdescription\u003e\" in account pages",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"\u003cinitialBalance\u003e\"in accounts pages",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters \"\u003caccountNumber\u003e\" in account page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters \"\u003ccontactPerson\u003e\" on account page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enters \"\u003cPhone\u003e\" on accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enyers \"\u003citernetBankingURL\u003e\" on accounts pages",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "techfios-otherlogin-functioality-validation;1-user-should-be-able-to-login-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "iternetBankingURL"
      ],
      "line": 30,
      "id": "techfios-otherlogin-functioality-validation;1-user-should-be-able-to-login-with-valid-credential;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Feroza homework",
        "Monthly Savings",
        "1500",
        "070707",
        "Nilima Rupa",
        "0124575252",
        "http//techfios.com"
      ],
      "line": 31,
      "id": "techfios-otherlogin-functioality-validation;1-user-should-be-able-to-login-with-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3374654600,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "#",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1060119000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "1 User should be able to login with valid credential",
  "description": "",
  "id": "techfios-otherlogin-functioality-validation;1-user-should-be-able-to-login-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@i-BillingLoginFeature"
    },
    {
      "line": 11,
      "name": "@OtherScenario1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters username as\"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should land on Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters \"Feroza homework\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters \"Monthly Savings\" in account pages",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"1500\"in accounts pages",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters \"070707\" in account page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters \"Nilima Rupa\" on account page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enters \"0124575252\" on accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enyers \"http//techfios.com\" on accounts pages",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 24
    }
  ],
  "location": "stepDefination.user_enters_username_as(String)"
});
formatter.result({
  "duration": 1184226700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "stepDefination.user_enters_password_as(String)"
});
formatter.result({
  "duration": 1130213800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2490223500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 572052800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 2119512100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 499332300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_should_land_on_Account_Page()"
});
formatter.result({
  "duration": 13050600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feroza homework",
      "offset": 13
    }
  ],
  "location": "stepDefination.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 221829400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly Savings",
      "offset": 13
    }
  ],
  "location": "stepDefination.user_enters_in_account_pages(String)"
});
formatter.result({
  "duration": 271937300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 13
    }
  ],
  "location": "stepDefination.user_enters_in_accounts_pages(String)"
});
formatter.result({
  "duration": 209382900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "070707",
      "offset": 13
    }
  ],
  "location": "stepDefination.user_enters_in_account_page(String)"
});
formatter.result({
  "duration": 179287800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nilima Rupa",
      "offset": 13
    }
  ],
  "location": "stepDefination.user_enters_on_account_page(String)"
});
formatter.result({
  "duration": 169026300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0124575252",
      "offset": 13
    }
  ],
  "location": "stepDefination.user_enters_on_accounts_page(String)"
});
formatter.result({
  "duration": 146054200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http//techfios.com",
      "offset": 13
    }
  ],
  "location": "stepDefination.user_enyers_on_accounts_pages(String)"
});
formatter.result({
  "duration": 180370900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_Submit_button()"
});
formatter.result({
  "duration": 1502257600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 93463600,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003cAccount Created Successfully\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:86)\r\n\tat steps.stepDefination.user_should_be_able_to_validate_account_created_successfully(stepDefination.java:151)\r\n\tat ✽.Then User should be able to validate account created successfully(features/i-Billing.feature:28)\r\n",
  "status": "failed"
});
});