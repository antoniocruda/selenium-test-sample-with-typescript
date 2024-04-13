import { By, Builder, Browser, WebDriver } from 'selenium-webdriver';
import assert from 'assert';

test("Initial test", async () => {
    const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).build();

    try {
        await driver.manage().setTimeouts({ implicit: 500 });

        await driver.get('https://www.google.com');

        const textBox = await driver.findElement(By.xpath("//textarea[@name='q']"));
        await textBox.sendKeys("Test Automation");

        const textBox2 = await driver.findElement(By.xpath("//textarea[@class=\"gLFyf\"]"));
        await textBox2.submit();

        const title = await driver.getTitle();
        assert.equal("Test Automation - Google Search", title);
    }
    catch (e) {
        console.log(e)
    }
    finally {
        await driver.quit();
    }
});
