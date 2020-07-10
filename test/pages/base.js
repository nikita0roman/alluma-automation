import sel from '../selectors/home.sel';

class Base {
    openBase() {
        browser.url('/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dggspa_cxsb01%26scope%3Dopenid%2520intakeservice%26response_type%3Did_token%2520token%26response_mode%3Dform_post%26redirect_uri%3Dhttps%253A%252F%252Fcx-sb01-auth01.azurewebsites.net%252FAccount%252FClientRedirect%26state%3Dhttp%253A%252F%252Foxcdemo.alluma.org%26nonce%3D48a56cd0-f07a-4818-9188-044e011e323b');
    }

    openForgotUsername() {
        browser.url('/Account/ForgotUsername?origin=https%3A%2F%2Fcx-sb01-auth01.azurewebsites.net%2FAccount%2FLogin%3FReturnUrl%3D%252Fconnect%252Fauthorize%252Fcallback%253Fclient_id%253Dggspa_cxsb01%2526scope%253Dopenid%252520intakeservice%2526response_type%253Did_token%252520token%2526response_mode%253Dform_post%2526redirect_uri%253Dhttps%25253A%25252F%25252Fcx-sb01-auth01.azurewebsites.net%25252FAccount%25252FClientRedirect%2526state%253Dhttp%25253A%25252F%25252Foxcdemo.alluma.org%2526nonce%253D48a56cd0-f07a-4818-9188-044e011e323b&clientid=ggspa');
    }

    openForgotPass() {
        browser.url('/Account/ForgotPassword?origin=https%3A%2F%2Fcx-sb01-auth01.azurewebsites.net%2FAccount%2FLogin%3FReturnUrl%3D%252Fconnect%252Fauthorize%252Fcallback%253Fclient_id%253Dggspa_cxsb01%2526scope%253Dopenid%252520intakeservice%2526response_type%253Did_token%252520token%2526response_mode%253Dform_post%2526redirect_uri%253Dhttps%25253A%25252F%25252Fcx-sb01-auth01.azurewebsites.net%25252FAccount%25252FClientRedirect%2526state%253Dhttp%25253A%25252F%25252Foxcdemo.alluma.org%2526nonce%253De43eec07-6da6-40c3-816e-435d4d17ef17&clientid=ggspa');
    }

    openUsers() {
        browser.url('/users');
    }

    pressLoginBtn() {
        $(sel.btnLogin).click();
        $(sel.svgAttention).waitForDisplayed();
    }
}

export default Base;