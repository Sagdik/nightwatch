module.exports = {
  '@tags':['medium'],
  'Medium Url lanunch': function (browser) {
    browser
      .url('https://medium.com/')
      .windowMaximize()
      .pause(5000)
      .waitForElementVisible('body',5000)
      .pause(5000)
      .end();
  }
};