import sel from '../selectors/footer.sel';
import exp from '../expected/footer.exp';
import { assert } from 'chai';
import Base from '../pages/base';

class footer extends Base {

    footerLogoDispayed() {
        $(sel.fLogo).isDisplayed();
    }

    bgColor() {
        let color = $(sel.footer).getCSSProperty('background-color').parsed.hex;
        assert.equal(color, exp.footerColor);
    }

    footerWidth(){
        let width = $(sel.footer).getCSSProperty('width').value;
        let screen = browser.getWindowSize().width + 'px';

        assert.equal(width, screen)
    }

    textH4(varbl, count) {
        let text = $$(sel.textH4)[count].getText();
        assert.equal(text, varbl);
    }

    firstH4Color() {
        let color = $$(sel.textH4)[0].getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.firH4Color);
    }

    firstH4Size() {
        let size = $$(sel.textH4)[0].getCSSProperty('font-size').value;
        assert.equal(size, exp.firH4Size);
    }

    secH4Text() {
        let text = $(sel.secH4).getText();
        assert.equal(text, exp.secH4);
    }

    secH4Color() {
        let color = $$(sel.textH4)[1].getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.secH4Color);
    }

    secH4Size() {
        let size = $$(sel.textH4)[1].getCSSProperty('font-size').value;
        assert.equal(size, exp.secH4Size);
    }

    thrH4Text() {
        let text = $(sel.thrH4).getText();
        assert.equal(text, exp.thrH4);
    }

    thrH4Color() {
        let color = $$(sel.textH4)[2].getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.thrH4Color);
    }

    thrH4Size() {
        let size = $$(sel.textH4)[2].getCSSProperty('font-size').value;
        assert.equal(size, exp.thrH4Size);
    }

    frsSpan1Text() {
        let text = $(sel.firSpan1).getText();
        assert.equal(text, exp.firSpan1);
    }

    frsSpan2Text() {
        let text = $(sel.firSpan2).getText();
        assert.equal(text, exp.firSpan2);
    }

    phoneNumber() {
        let text = $(sel.phone).getText();
        assert.equal(text, exp.phone);
    }

    mailAddress() {
        let text = $(sel.mail).getText();
        assert.equal(text, exp.mail);
    }

    fax() {
        let text = $(sel.fax).getText();
        assert.equal(text, exp.fax);
    }

    snIco(count = 0) {
        $$(sel.snIco)[count].isDisplayed();
    }

    snLink(varbl, count = 0) {
        let href = $$(sel.snIco)[count].getAttribute('href');
        assert.equal(href, varbl);
    }

    hrIsDisplayed() {
        $(sel.hr).waitForDisplayed();
    }

    hrHeight() {
        let css = $(sel.hr).getCSSProperty('height').value;
        assert.equal(css, exp.hr);
    }

    allumaLogoAlt() {
        let altText = $(sel.fLogo).getAttribute('alt');
        assert.equal(altText, exp.fLogoAlt);
    }

    allumaLogoWidth() {
        let altText = $(sel.fLogo).getAttribute('width');
        assert.equal(altText, exp.fLogoWidth);
    }

    allumaLogoLink() {
        let altLink = $$(sel.fLogoLink)[0].getAttribute('href');
        assert.equal(altLink, exp.fLogoLink);
    }

    copyright() {
        let text = $$(sel.navBar)[0].getText();
        assert.equal(text, exp.copyrg);
    }

    copyrightALink() {
        let link = $(sel.copyrgLink).getAttribute('href');
        assert.equal(link, exp.fLogoLink);
    }

    copyright() {
        let text = $$(sel.navBar)[0].getText();
        assert.equal(text, exp.copyrg);
    }

    pP() {
        let text = $$(sel.navBar)[2].getText();
        assert.equal(text, exp.pPolicy);
    }

    nDP() {
        let text = $$(sel.navBar)[4].getText();
        assert.equal(text, exp.ndPolicy);
    }

    termOfUs() {
        let text = $$(sel.navBar)[6].getText();
        assert.equal(text, exp.termsOfUse);
    }

}

export default new footer();