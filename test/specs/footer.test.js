import footer from '../pages/footer.page';
import exp from '../expected/footer.exp'

describe('Footer', function () {

    it('Footer-color', function () {
        footer.openBase();
        footer.bgColor();
    })

    it('Footer-width', function () {
        footer.footerWidth();
    })

    it('First-h4-text', function () {
        footer.textH4(exp.firH4, 0);
    })

    it('First-h4-color', function () {
        footer.firstH4Color();
    })

    it('First-h4-size', function () {
        footer.firstH4Size();
    })

    it('Second-h4-text', function () {
        footer.textH4(exp.secH4, 1);
    })

    it('Second-h4-color', function () {
        footer.secH4Color();
    })

    it('Second-h4-size', function () {
        footer.secH4Size();
    })

    it('Three-h4-text', function () {
        footer.textH4(exp.thrH4, 2);
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
        footer.snIco(0);
    })

    it('Twitter-ico', function () {
        footer.snIco(1);
    })

    it('Linkedin-ico', function () {
        footer.snIco(2);
    })

    it('Facebook-link', function () {
        footer.snLink(exp.fbLink, 0);
    })

    it('Twitter-link', function () {
        footer.snLink(exp.twLink, 1);
    })

    it('Linkedin-link', function () {
        footer.snLink(exp.inLink, 2);
    })

    it('Hr-is-displayed', function () {
        footer.hrIsDisplayed();
    })

    it('Hr-height', function () {
        footer.hrHeight();
    })

    it('Footer-logo', function () {
        footer.footerLogoDispayed();
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

})
