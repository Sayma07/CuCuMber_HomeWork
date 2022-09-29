package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.testng.Assert;

public class DashBoardPage {
	WebDriver driver;

	public DashBoardPage(WebDriver driver) {
		this.driver = driver;
	}

	// WebElement list
	// Type name=value
	@FindBy(how = How.XPATH, using = "//h2[text()=' Dashboard ']")
	WebElement DASHBOARD_ELEMENT;

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")
	WebElement BankAndCash_MENUE_FIELD;

	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")
	WebElement NewAccount_MENUE_FIELD;




	public void validateDashboardPage(String expectedTest) {
		Assert.assertEquals(DASHBOARD_ELEMENT.getText(), "Dashboard", "Dasboard is not Found");

	}

public void clickBankAndCash() throws Exception {
	
	BankAndCash_MENUE_FIELD.click();
	Thread.sleep(2000);
	
}
public void clicknewAccount() {
	NewAccount_MENUE_FIELD.click();
}



}
