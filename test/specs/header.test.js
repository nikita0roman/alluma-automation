import header from '../pages/header.page'

describe('Header', function () {

    it('Header-logo', function () {
        header.headerLogoDispayed();
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
