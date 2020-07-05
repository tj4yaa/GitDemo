package gluecode;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.WebConnector;

public class HomePageGlueCode extends WebConnector { 
	
	@When("I hover on {string} button")
	public void i_hover_on_button(String string) {
		WebElement element = driver.findElement(By.xpath(string));
		Actions action = new Actions(driver);
		action.moveToElement(element).moveToElement(driver.findElement(By.xpath(string))).click().build().perform(); }
		
	@When("I should click on {string} button")
	public void i_should_click_on_button(String string) {
			driver.findElement(By.xpath(string)).click();
		   
	}
	
	@Then("I should see {string} page title")
	public void i_should_see_page_title(String string) {
		driver.findElement(By.xpath(string)).click();
	}
	
	@Given("I am on the home page")
	public void i_am_on_the_home_page() {
	  driver.get(baseUrl);
	}
	
	@Given("I am on home page")
	public void i_am_on_home_page() {
	    driver.get(baseUrl);
	    
	}
	    
	@Then("I should see {string} title")
	public void i_should_see_title(String expectedTitle) {
	    Assert.assertEquals(expectedTitle, driver.getTitle());
	}
    
	@When("I click on {string} button")
	public void i_click_on_button(String locator) {
	    driver.findElement(By.xpath(locator)).click();
	}
	
	@Then("the page url should contain {string}")
	public void the_page_url_should_contain(String expectedPath) {
	   Assert.assertTrue(driver.getCurrentUrl().contains(expectedPath));
	   
	 	}

}
