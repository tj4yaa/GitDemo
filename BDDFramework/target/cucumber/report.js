$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Homepage.feature");
formatter.feature({
  "name": "Verify home page",
  "description": "\tAs a gocompare site customer\nI should be able to navigate through the home page\nSo that I can find the stuff I need",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageGlueCode.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Taxi Insurance in the Motoring dropdown menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I hover on \"//a[contains(text(),\u0027Motoring\u0027)]\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageGlueCode.i_hover_on_button(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LAPTOP-6B8GSQQ1\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\tjay4\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52384}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: f6aaf90efe0bfa587e3e1e17559b62cd\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Motoring\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat gluecode.HomePageGlueCode.i_hover_on_button(HomePageGlueCode.java:17)\r\n\tat ✽.I hover on \"//a[contains(text(),\u0027Motoring\u0027)]\" button(features/Homepage.feature:46)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should click on \"//li[@class\u003d\u0027menu_3\u0027]//ul//li[6]\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageGlueCode.i_should_click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});