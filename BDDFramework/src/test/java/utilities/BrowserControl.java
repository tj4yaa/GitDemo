package utilities;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BrowserControl extends WebConnector {
	
	@Before
	public void openBrowser (){
		if(browserType.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "../BDDFramework/src/test/java/resources/chromedriver.exe"); 
			driver = new ChromeDriver();
				
		} else if (browserType.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "../BDDFramework/src/test/java/resources/gekodriver.exe"); 
			driver = new FirefoxDriver ();
		}
	}
	
		@After
		public void closeBrowser() {
			driver.quit();
		}

}
