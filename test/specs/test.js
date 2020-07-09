import assert from 'assert';

describe('Client', function () { //define suite title by passing a string

    it('Get title', function () { //define test title by passing a string
      browser.url('/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dggspa_cxsb01%26scope%3Dopenid%2520intakeservice%26response_type%3Did_token%2520token%26response_mode%3Dform_post%26redirect_uri%3Dhttps%253A%252F%252Fcx-sb01-auth01.azurewebsites.net%252FAccount%252FClientRedirect%26state%3Dhttp%253A%252F%252Foxcdemo.alluma.org%26nonce%3D48a56cd0-f07a-4818-9188-044e011e323b'); //open baseUrl + string passed in .url() function
      let title = browser.getTitle(); //get page title and assign it to the "title" variable
      browser.pause(2000); //just pause to visually see that something is happening on the page
      assert.equal(title, 'Bug Tracker'); //compare {title} (actual) and "Bug Tracker" (expected)
    })

});