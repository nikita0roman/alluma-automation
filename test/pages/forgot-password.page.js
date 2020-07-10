import sel from '../selectors/forgot-password.sel';
import exp from '../expected/forgot-password.exp';
import { assert } from 'chai';
import Base from '../pages/base';

class forgotPassword extends Base {

    forgotText(varbl) {
        let text = $(sel.forgotText).getText();
        assert.equal(text, varbl);
    }

    forgotColor() {
        let color = $(sel.forgotText).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.forgotColor);
    }

    forgotSize() {
        let size = $(sel.forgotText).getCSSProperty('font-size').value;
        assert.equal(size, exp.forgotSize);
    }

    hrLine(varb = 0) {
        $$(sel.hrLine)[varb].isDisplayed();
    }

    hrLineColor(varb = 0) {
        let color = $$(sel.hrLine)[varb].getCSSProperty('color').value;
        assert.equal(color, exp.hrColor);
    }

    hrLineHeight(varb = 0) {
        let size = $$(sel.hrLine)[varb].getCSSProperty('height').value;
        assert.equal(size, exp.hrHeight);
    }

    taglineText(varb) {
        let text = $(sel.tagLine).getText();
        assert.equal(text, varb);
    }

    taglineColor() {
        let color = $(sel.tagLine).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.taglineColor);
    }

    taglineSize() {
        let size = $(sel.tagLine).getCSSProperty('font-size').value;
        assert.equal(size, exp.taglineSize);
    }

    forgotUsername() {
        let text = $(sel.linkToFrgUsrnm).getText();
        assert.equal(text, exp.linkToFrgUsrnm);
    }

    forgotUsernameLink() {
        let href = $(sel.linkToFrgUsrnm).getAttribute('href');
        assert.equal(href, exp.linkToFrgUsrnmLink);
    }

    forgotUsernameColor() {
        let color = $(sel.linkToFrgUsrnm).getCSSProperty('color').value;
        assert.equal(color, exp.linkToFrgUsrnmColor);
    }

    mainLabel() {
        let text = $(sel.mainLabel).getText();
        assert.equal(text, exp.mainLabel);
    }

    requiredColor() {
        let color = $(sel.requiredText).getCSSProperty('color').value;
        assert.equal(color, exp.requiredColor);
    }

    userNameInput() {
        let size = $(sel.inputBox).getCSSProperty('max-width').value;
        assert.equal(size, exp.inputWidth);
    }

    userNameSvg() {
        let size = $(sel.inputSvg).getCSSProperty('width').value;
        assert.equal(size, exp.inputSvgSize);
    }

    btnText(varb, count) {
        let text = $$(sel.buttons)[count].getText();
        assert.equal(text, varb);
    }

    btnTextColor(count) {
        let color = $$(sel.buttons)[count].getCSSProperty('color').value;
        assert.equal(color, exp.btnTextColor);
    }

    btnColor(count) {
        let color = $$(sel.buttons)[count].getCSSProperty('background-color').value;
        assert.equal(color, exp.btnColor);
    }

    value(varb, count) {
        let value = $$(sel.buttons)[count].getAttribute('value');
        assert.equal(value, varb);
    }

    //Functionality
    forgotMyUsernameClick() {
        $(sel.linkToFrgUsrnm).click();
        $('div=Recover Username').waitForDisplayed();
        $(sel.linkToFrgUsrnm).click();
    }

    cancelBtnClick() {
        $$(sel.buttons)[0].click();
        $('div=Welcome to Connections').waitForDisplayed();
        $$(sel.linkToFrgUsrnm)[2].click();
    }
    
    // Empty-input
    emptyContinueClick() {
        $$(sel.buttons)[1].click();
        let text = $(sel.errorMes).getText();
        assert.equal(text, exp.emptyLoginErr);
    }

    allertSvgSize() {
        let size = $(sel.svgAttention).getCSSProperty('width').value;
        assert.equal(size, exp.svgAttentionSize);
    }

    allertSvgClr() {
        let color = $(sel.svgAttention).getCSSProperty('color').value;
        assert.equal(color, exp.svgAttentionColor);
    }

    continueClick() {
        $(sel.inputBox).setValue('abcd');
        $$(sel.buttons)[1].click();
        $('div=Email sent').waitForDisplayed();
    }

    doneMsg() {
        let text = $(sel.doneMsg).getText();
        assert.equal(text, exp.doneMsg);
    }

    doneSvgColor() {
        let color = $(sel.doneSvg).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.doneSvgColor);
    }

    doneSvgSize() {
        let size = $(sel.doneSvg).getCSSProperty('width').value;
        assert.equal(size, exp.doneSvgSize);
    }

    resendMailColor() {
        let color = $(sel.resendMail).getCSSProperty('color').value;
        assert.equal(color, exp.resendMailColor);
    }

    resendMailValue() {
        let value = $(sel.resendMail).getAttribute('value');
        assert.equal(value, exp.resendMailValue);
    }

    cancelBtnText() {
        let text = $$(sel.buttons)[0].getText();
        assert.equal(text, exp.cancelBtn);
    }

    cancelBtnTextColor() {
        let color = $$(sel.buttons)[0].getCSSProperty('color').value;
        assert.equal(color, exp.cancelBtnTextColor);
    }

    cancelBtnColor() {
        let color = $$(sel.buttons)[0].getCSSProperty('background-color').value;
        assert.equal(color, exp.cancelBtnColor);
    }

    cancelValue() {
        let value = $$(sel.buttons)[0].getAttribute('value');
        assert.equal(value, exp.cancelBtnValue);
    }
}

export default new forgotPassword();