import footer from '../pages/footer.page'

describe('Footer', function () {

    it('Footer-logo', function () {
        footer.openBase();
        footer.footerLogoDispayed();
    })

    it('First-h4-text', function () {
        footer.firstH4Text();
    })

    it('First-h4-color', function () {
        footer.firstH4Color();
    })

    it('First-h4-size', function () {
        footer.firstH4Size();
    })

    it('Second-h4-text', function () {
        footer.secH4Text();
    })

    it('Second-h4-color', function () {
        footer.secH4Color();
    })

    it('Second-h4-size', function () {
        footer.secH4Size();
    })

    it('Three-h4-text', function () {
        footer.thrH4Text();
    })

    it('Three-h4-color', function () {
        footer.thrH4Color();
    })

    it('Three-h4-size', function () {
        footer.thrH4Size();
    })

    it('First-span', function () {
        footer.frsSpan1Text();
    })

    it('Second-span', function () {
        footer.frsSpan2Text();
    })

    it('Phone-number', function () {
        footer.phoneNumber();
    })

    it('Mail-address', function () {
        footer.mailAddress();
    })

    it('Fax', function () {
        footer.fax();
    })

    it('Facebook-ico', function () {
        footer.fb();
    })

    it('Twitter-ico', function () {
        footer.tw();
    })

    it('Linkedin-ico', function () {
        footer.in();
    })

    it('Hr-height', function () {
        footer.hrHeight();
    })

    it('Alluma-logo-alt', function () {
        footer.allumaLogoAlt();
    })

    it('Alluma-logo-width', function () {
        footer.allumaLogoWidth();
    })

    it('Alluma-logo-link', function () {
        footer.allumaLogoLink();
    })

    it('Copyright', function () {
        footer.copyright();
    })

    it('Copyright-Link', function () {
        footer.copyrightALink();
    })

    it('Privacy-Policy', function () {
        footer.pP();
    })

    it('Non-discrimination Policy', function () {
        footer.nDP();
    })

    it('Terms of Use', function () {
        footer.termOfUs();
    })

    it('Footer-color', function () {
        footer.fColor();
    })

})
