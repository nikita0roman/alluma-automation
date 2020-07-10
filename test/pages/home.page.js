import sel from '../selectors/home.sel';
import exp from '../expected/home.exp';
import { assert } from 'chai';
import Base from '../pages/base';

class home extends Base {

    bgImage() {
        let bg = $(sel.bgImg).getCSSProperty('background-image').value;
        assert.equal(bg, exp.bg);
    }

    containerBg() {
        let bg = $(sel.containerBg).getCSSProperty('background-color').parsed.hex;
        assert.equal(bg, exp.containerBg);
    }

    connText(varb = 'CONNECTIONS', count = 0) {
        let text = $$(sel.conn)[count].getText();
        assert.equal(text, varb);
    }

    connColor() {
        let color = $(sel.conn).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.connColor);
    }

    connSize() {
        let size = $(sel.conn).getCSSProperty('font-size').value;
        assert.equal(size, exp.connSize);
    }

    welcomeText() {
        let text = $(sel.welcome).getText();
        assert.equal(text, exp.welcomeText);
    }

    welcomeColor() {
        let color = $(sel.welcome).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.welcomeColor);
    }

    welcomeSize() {
        let size = $(sel.welcome).getCSSProperty('font-size').value;
        assert.equal(size, exp.welcomeSize);
    }

    taglineText() {
        let text = $(sel.tagLine).getText();
        assert.equal(text, exp.taglineText);
    }

    taglineColor() {
        let color = $(sel.tagLine).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.taglineColor);
    }

    taglineSize() {
        let size = $(sel.tagLine).getCSSProperty('font-size').value;
        assert.equal(size, exp.taglineSize);
    }

    questionText() {
        let text = $$(sel.questionText)[1].getText();
        assert.equal(text, exp.questionText);
    }

    questionColor() {
        let color = $$(sel.questionText)[1].getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.connColor);
    }

    questionSize() {
        let size = $$(sel.questionText)[1].getCSSProperty('font-size').value;
        assert.equal(size, exp.connSize);
    }

    quickScreener() {
        let text = $$(sel.qScreener)[0].getText();
        assert.equal(text, exp.qScreener);
    }

    userName() {
        let text = $$(sel.loginLabel)[0].getText();
        assert.equal(text, exp.username);
    }

    userNameReq() {
        let text = $$(sel.loginReq)[0].getText();
        assert.equal(text, exp.req);
    }

    userNameReqColor() {
        let color = $$(sel.loginReq)[0].getCSSProperty('color').value;
        assert.equal(color, exp.reqColor);
    }

    userNameInput() {
        let size = $$(sel.inputBox)[0].getCSSProperty('max-width').value;
        assert.equal(size, exp.inputWidth);
    }

    userNameSvg() {
        let size = $$(sel.inputSvg)[0].getCSSProperty('width').value;
        assert.equal(size, exp.inputSvgSize);
    }

    pass() {
        let text = $$(sel.loginLabel)[1].getText();
        assert.equal(text, exp.pass);
    }

    passReq() {
        let text = $$(sel.loginReq)[1].getText();
        assert.equal(text, exp.req);
    }

    passReqColor() {
        let color = $$(sel.loginReq)[1].getCSSProperty('color').value;
        assert.equal(color, exp.reqColor);
    }

    passInput() {
        let size = $$(sel.inputBox)[1].getCSSProperty('max-width').value;
        assert.equal(size, exp.inputWidth);
    }

    passSvg() {
        let size = $$(sel.inputSvg)[1].getCSSProperty('width').value;
        assert.equal(size, exp.inputSvgSize);
    }

    forgotLine() {
        let text = $$(sel.forgotLine)[1].getText();
        assert.equal(text, exp.forgotLine);
    }

    firsAddInfo() {
        let text = $$(sel.addInfo)[0].getText();
        assert.equal(text, exp.firsAddInfoText);
    }

    secAddInfo() {
        let text = $$(sel.addInfo)[1].getText();
        assert.equal(text, exp.secAddInfoText);
    }

    // Empty-input
    allertSvgSize() {
        let size = $(sel.svgAttention).getCSSProperty('width').value;
        assert.equal(size, exp.svgAttentionSize);
    }

    allertSvgClr() {
        let color = $(sel.svgAttention).getCSSProperty('color').value;
        assert.equal(color, exp.svgAttentionColor);
    }

    errorMes() {
        $$(sel.inputBox)[0].setValue('');
        $$(sel.inputBox)[1].setValue('');
        let text = $(sel.errorMes).getText();
        assert.equal(text, exp.emptyLogin + '\n' + exp.emptyPass);
    }

    // Empty-pass-input
    passErrorMes() {
        $$(sel.inputBox)[0].setValue('1');
        $$(sel.inputBox)[1].setValue('');
        this.pressLoginBtn();
        let text = $(sel.errorMes).getText();
        assert.equal(text, exp.emptyPass);
    }

    // Empty-login-input
    UsernameErrorMes() {
        $$(sel.inputBox)[0].setValue('');
        $$(sel.inputBox)[1].setValue('1');
        this.pressLoginBtn();
        let text = $(sel.errorMes).getText();
        assert.equal(text, exp.emptyLogin);
    }

    // Wrong-input-data
    WroongErrorMes() {
        $$(sel.inputBox)[0].setValue('3');
        $$(sel.inputBox)[1].setValue('3');
        this.pressLoginBtn();
        let text = $(sel.errorMes).getText();
        assert.equal(text, exp.wrongMes);
    }

    usernameFrgClk() {
        $$(sel.forgetLink)[0].click();
        $('div=Recover Username').waitForDisplayed();
    }

    passFrgClk() {
        this.openBase();
        $$(sel.forgetLink)[1].click();
        $('div=Forgot Password?').waitForDisplayed();
    }
}

export default new home();