package steps;


import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.AccountPage;
import pages.DashBoardPage;

import pages.LoginPage;
import pages.TestBase;

public class stepDefination extends TestBase{
		
LoginPage loginPage;
DashBoardPage dashboardPage;

AccountPage accountPage;

@Before
public void setup() {

	initDriver();
	loginPage = PageFactory.initElements(driver, LoginPage.class);
	dashboardPage=  PageFactory.initElements(driver, DashBoardPage.class);
}

@Given("^User is on techfios login page$")
public void user_is_on_techfios_login_page() {

	driver.get("https://techfios.com/billing/?ng=login/after/dashboard");

	//takeScreenShot(driver);
}

@When("^User enters username as\"([^\"]*)\"$")
public void user_enters_username_as(String username) {
 loginPage= PageFactory.initElements(driver, LoginPage.class);

	// Thread.sleep(3000);

loginPage.enterUserName(username);

}

@When("^User enters password as \"([^\"]*)\"$")
public void user_enters_password_as(String password) {
	loginPage.enterPassword(password);
}

@When("^User clicks on signin button$")
public void user_clicks_on_signin_button() {
	loginPage.clickSignInButton();

}

@Then("^User should land on dashboard page$")
public void user_should_land_on_dashboard_page() {
	Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	takeScreenShot(driver);

	}

@Then("^User clicks on bankCash$")
public void user_clicks_on_bankCash() throws Throwable {
	
	dashboardPage=  PageFactory.initElements(driver, DashBoardPage.class);
	
	dashboardPage.clickBankAndCash();
	
    
}
@Then("^User clicks on newAccount$")
public void user_clicks_on_newAccount() throws Throwable {
	dashboardPage=  PageFactory.initElements(driver, DashBoardPage.class);
	
	dashboardPage.clicknewAccount();
	
}
@Then("^User should land on Account Page$")
public void user_should_land_on_Account_Page() throws Throwable {
	
	
	accountPage=PageFactory.initElements(driver, AccountPage.class);
	
	
	Assert.assertEquals("Accounts- iBilling", accountPage.getPageTitle());
	
}
@Then("^User enters \"([^\"]*)\" in accounts page$")
public void user_enters_in_accounts_page(String accountTitle) throws Throwable {
	
	String  insertedaccountTitle = accountTitle + generateRandomNumber(999);
	
	accountPage.entersAccountTitle(insertedaccountTitle);
	
}


@Then("^User enters \"([^\"]*)\" in account pages$")
public void user_enters_in_account_pages(String description) throws Throwable {
	accountPage.enterDescription(description);
}
@Then("^User enters \"([^\"]*)\"in accounts pages$")
public void user_enters_in_accounts_pages(String initialBalance) throws Throwable {
	accountPage.enterInitialBalance(initialBalance);
}
@Then("^User enters \"([^\"]*)\" in account page$")
public void user_enters_in_account_page(String accountNumber) throws Throwable {
	accountPage.enteraccountNumber(accountNumber);
}
@Then("^User enters \"([^\"]*)\" on account page$")
public void user_enters_on_account_page(String contactPerson) throws Throwable {
	accountPage.enterContactPerson(contactPerson);
}
@Then("^User enters \"([^\"]*)\" on accounts page$")
public void user_enters_on_accounts_page(String Phone) throws Throwable {
 
	accountPage.enterPhoneNumber(Phone);

}
@Then("^User enyers \"([^\"]*)\" on accounts pages$")
public void user_enyers_on_accounts_pages(String iternetBankingURL) throws Throwable {
	accountPage.enterInternalBankingURL(iternetBankingURL);


}
@Then("^User click on Submit button$")
public void user_click_on_Submit_button() throws Throwable {
	accountPage.clickSubmitButton();
	
	System.out.println(accountPage.accountPageValidationExistance());
	
	
}

@Then("^User should be able to validate account created successfully$")
public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {

	
	
	//Assert.assertEquals("page not found","Account Created Successfully. Error: Invalid URL. URL Not Updated.", accountPage.accountPageValidationExistance());
	//Assert.assertTrue("Account Created Successfully. Error: Invalid URL. URL Not Updated.", accountPage.accountPageValidationExistance());
	
	Assert.assertEquals( "Account Created Successfully",accountPage.accountPageValidationExistance());
	

//Assert.assertEquals("Page not found", accountPage.accountPageValidationExistance());

}

	
}
	
	
	
	
	
	
	
	
	
	
	
	
	