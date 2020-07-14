import homeSel from '../selectors/home.sel';
import fPassSel from '../selectors/forgot-password.sel';
import homeExp from '../expected/home.exp';
import fPassExp from '../expected/forgot-password.exp';
import { assert } from 'chai';

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

    containerBg() {
        let bg = $(homeSel.containerBg).getCSSProperty('background-color').parsed.hex;
        assert.equal(bg, homeExp.containerBg);
    }

    minWidth() {
        let size = $(homeSel.containerBg).getCSSProperty('width').value;
        assert.equal(size, homeExp.containerMinWidth);
    }

    connText(varb = 'CONNECTIONS', count = 0) {
        let text = $$(homeSel.conn)[count].getText();
        assert.equal(text, varb);
    }

    connColor() {
        let color = $(homeSel.conn).getCSSProperty('color').parsed.hex;
        assert.equal(color, homeExp.connColor);
    }

    connSize() {
        let size = $(homeSel.conn).getCSSProperty('font-size').value;
        assert.equal(size, homeExp.connSize);
    }

    btnText(varb, count = 0) {
        let text = $$(fPassSel.buttons)[count].getText();
        assert.equal(text, varb);
    }

    btnTextColor(count = 0) {
        let color = $$(fPassSel.buttons)[count].getCSSProperty('color').value;
        assert.equal(color, fPassExp.btnTextColor);
    }

    btnColor(count = 0) {
        let color = $$(fPassSel.buttons)[count].getCSSProperty('background-color').value;
        assert.equal(color, fPassExp.btnColor);
    }

    value(varb, count = 0) {
        let value = $$(fPassSel.buttons)[count].getAttribute('value');
        assert.equal(value, varb);
    }

    forgotText(varbl) {
        let text = $(fPassSel.forgotText).getText();
        assert.equal(text, varbl);
    }

    forgotColor() {
        let color = $(fPassSel.forgotText).getCSSProperty('color').parsed.hex;
        assert.equal(color, fPassExp.forgotColor);
    }

    forgotSize() {
        let size = $(fPassSel.forgotText).getCSSProperty('font-size').value;
        assert.equal(size, fPassExp.forgotSize);
    }

    bgImage() {
        let bg = $(homeSel.bgImg).getCSSProperty('background-image').value;
        assert.equal(bg, homeExp.bg);
    }

}

export default Base;