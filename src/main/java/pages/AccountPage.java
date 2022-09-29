package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountPage {
	WebDriver driver;

	public AccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement Account_Title;

	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement Description_Title;

	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement intialBalance_Title;

	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement accountNumber_Title;

	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement contactPerson_Title;

	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement phoneNumber_Title;

	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement internalBankingURL_Title;

	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement submitButton_Title;

	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1][contains(string(),\"Account Created Successfully. Error: Invalid URL. URL Not Updated.\")]")
	WebElement accountPageValidation_Title;

	public String getPageTitle() {
		return driver.getTitle();
	}

	public void entersAccountTitle(String accountTitle) {
		Account_Title.sendKeys(accountTitle);
	}

	public void enterDescription(String description) {
		Description_Title.sendKeys(description);
	}

	public void enterInitialBalance(String balance) {
		intialBalance_Title.sendKeys(balance);

	}

	public void enteraccountNumber(String accountNumber) {
		accountNumber_Title.sendKeys(accountNumber);

	}

	public void enterContactPerson(String contactPerson) {
		contactPerson_Title.sendKeys(contactPerson);

	}

	public void enterPhoneNumber(String Phone) {
		phoneNumber_Title.sendKeys(Phone);

	}

	public void enterInternalBankingURL(String iternetBankingURL) {
		internalBankingURL_Title.sendKeys(iternetBankingURL);

	}

	public void clickSubmitButton() {
		submitButton_Title.click();

	}

	public boolean accountPageValidationExistance() {

		
		
		return accountPageValidation_Title.isDisplayed();

	}

}