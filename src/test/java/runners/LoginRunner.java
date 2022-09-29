package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)       //RUnWith have to import from Junit not from cucumber
@CucumberOptions(
			features = "classpath:features", 
			glue = "steps",
	tags = "@i-BillingLoginFeature",
			monochrome = true,
	//dryRun = false,
			plugin = { "pretty",
					"html:target/cucumber",
					"json:target/cucumber.json" })



	public class LoginRunner {

	}


