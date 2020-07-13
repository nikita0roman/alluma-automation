import sel from '../selectors/forgot-username.sel';
import exp from '../expected/forgot-username.exp';
import { assert } from 'chai';
import Base from '../pages/base';

class forgotPassword extends Base {

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

    forgotPass() {
        let text = $(sel.linkToFrgPass).getText();
        assert.equal(text, exp.linkToFrgUsrnm);
    }

    forgotPassLink() {
        let href = $(sel.linkToFrgPass).getAttribute('href');
        assert.equal(href, exp.linkToFrgUsrnmLink);
    }

    forgotPassColor() {
        let color = $(sel.linkToFrgPass).getCSSProperty('color').value;
        assert.equal(color, exp.linkToFrgUsrnmColor);
    }
    //Functionality
    forgotMyPassClick() {
        $(sel.linkToFrgPass).click();
        $('div=Forgot Password?').waitForDisplayed();
        $(sel.linkToFrgPass).click();
    }

    backToLoginBtnClick() {
        $$(sel.buttons)[0].click();
        $('div=Welcome to Connections').waitForDisplayed();
        $$(sel.linkToFrgPass)[1].click();
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

    recoverClick() {
        $(sel.inputBox).setValue(`abc${Math.random() * 10}d@qwe.com`);
        $$(sel.buttons)[1].click();
        $('div=Recover Username').waitForDisplayed();
    }
}

export default new forgotPassword();