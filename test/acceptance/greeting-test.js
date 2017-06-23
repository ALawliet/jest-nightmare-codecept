Feature('CodeceptJS demo');

Scenario('check Welcome page on site', (I) => {
  I.amOnPage('/');
  I.see('Welcome to React');
  I.dontSee('Welcome to Angular');
});

Scenario('check + button', (I) => {
  I.see(0);
  I.click('+');
  I.see(1);
});
