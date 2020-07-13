import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import { assert } from 'chai';
import Base from '../pages/base';

class header extends Base {

    bgColor() {
        let color = $$(sel.header)[0].getCSSProperty('background-color').parsed.hex;
        assert.equal(color, exp.headerColor);
    }

    headerWidth(){
        let width = $$(sel.header)[0].getCSSProperty('width').value;
        let screen = browser.getWindowSize().width + 'px';
        assert.equal(width, screen)
    }

    headerLogoText() {
        let text = $(sel.hLogo).getText();
        assert.equal(text, exp.hLogoText)
    }

    headerLogoColor() {
        let color = $(sel.hLogo).getCSSProperty('color').parsed.hex;
        assert.equal(color, exp.hLogoColor)
    }

    headerLogoSize() {
        let size = $(sel.hLogo).getCSSProperty('font-size').value;
        assert.equal(size, exp.hLogoSize)
    }

}

export default new header();