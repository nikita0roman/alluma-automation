import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import { assert } from 'chai';
import Base from '../pages/base';

class header extends Base {

    headerLogoDispayed() {
        this.openBase();
        $(sel.hLogo).isDisplayed();
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