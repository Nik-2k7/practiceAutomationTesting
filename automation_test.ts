Feature("https://practice.automationtesting.in/");

Scenario("test", ({ I }) => {
  I.amOnPage("https://practice.automationtesting.in");
  I.wait(5);
  I.click('//a[contains(text(),"Shop")]');
  I.wait(5);
  I.click('//a[contains(text(), "Home")]');
  I.wait(5);
  I.click('//div[@id="n2-ss-6-arrow-next"]');
  I.click('//div[@id="n2-ss-6-arrow-next"]');
  I.click('//div[@id="n2-ss-6-arrow-next"]');
});
