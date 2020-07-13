import header from '../pages/header.page'

describe('Header', function () {

    it('Background-color', function () {
        header.openBase();
        header.bgColor();
    })

    it('Header-width', function () {
        header.headerWidth();
    })

    it('Header-logo-text', function () {
        header.headerLogoText();
    })

    it('Header-logo-color', function () {
        header.headerLogoColor();
    })

    it('Header-logo-size', function () {
        header.headerLogoSize();
    })

})
