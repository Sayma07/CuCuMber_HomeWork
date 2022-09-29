package pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	public static WebDriver driver;

	 public static void initDriver() {
	  System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
	  driver = new ChromeDriver();
	  driver.manage().window().maximize();
	  driver.manage().deleteAllCookies();
	  driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	 }

	 
	 public void takeScreenShot(WebDriver driver){
			
			TakesScreenshot ts=(TakesScreenshot)driver;
			File SourceFile=ts.getScreenshotAs(OutputType.FILE);
			String currentDirectory=System.getProperty("user.dir");
			
			
			SimpleDateFormat formator=new SimpleDateFormat("MMddyy_HHmmss");
			
			Date date=new Date();
			
			String label=formator.format(date);
			
			try {
				FileUtils.copyFile(SourceFile, new File(currentDirectory+"/screenshot/"+label+".png"));
			} catch (IOException e) {
				e.printStackTrace();
			}

}
	 public int generateRandomNumber(int boundaryNum) {
			Random rnd=new Random();
			int genNum=rnd.nextInt(boundaryNum);
		return genNum;
		
		
		}
	 
}