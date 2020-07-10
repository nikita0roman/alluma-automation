import home from '../pages/home.page'
import exp from '../expected/home.exp';


describe('Home-page', function () {

    it('Home-background', function () {
        home.openBase();
        home.bgImage();
    })

    it('Container-background', function () {
        home.containerBg();
    })

    it('Connections-text', function () {
        home.connText(exp.connText);
    })

    it('Connections-color', function () {
        home.connColor();
    })

    it('Connections-size', function () {
        home.connSize();
    })

    it('Welcome-text', function () {
        home.welcomeText();
    })

    it('Welcome-color', function () {
        home.welcomeColor();
    })

    it('Welcome-size', function () {
        home.welcomeSize();
    })

    it('Tagline-text', function () {
        home.taglineText();
    })

    it('Tagline-color', function () {
        home.taglineColor();
    })

    it('Tagline-size', function () {
        home.taglineSize();
    })

    it('Question-text', function () {
        home.questionText();
    })

    it('Question-color', function () {
        home.questionColor();
    })

    it('Question-size', function () {
        home.questionSize();
    })

    it('Quick-screener', function () {
        home.quickScreener();
    })


    it('User-name-text', function () {
        home.userName();
    })

    it('User-name-required-text', function () {
        home.userNameReq();
    })

    it('User-name-required-color', function () {
        home.userNameReqColor();
    })

    it('User-name-input-width', function () {
        home.userNameInput();
    })

    it('User-name-svg-width', function () {
        home.userNameSvg();
    })

    it('Password-text', function () {
        home.pass();
    })

    it('Password-required-text', function () {
        home.passReq();
    })

    it('Password-required-color', function () {
        home.passReqColor();
    })

    it('Password-input-width', function () {
        home.passInput();
    })

    it('Password-name-svg-width', function () {
        home.passSvg();
    })

    it('Forgot-line-text', function () {
        home.forgotLine();
    })

    it('Additional-information', function () {
        home.firsAddInfo();
        home.secAddInfo();
    })
    // Empty-Input
    it('Alert-svg', function () {
        home.pressLoginBtn();
    })

    it('Alert-svg-size', function () {
        home.allertSvgSize();
    })

    it('Alert-svg-color', function () {
        home.allertSvgClr();
    })

    it('Empty-inputs-error-messages', function () {
        home.errorMes();
    })
    // Empty-Password-Input
    it('Empty-password-error-messages', function () {
        home.passErrorMes();
    })
    // Empty-Username-Input
    it('Empty-username-error-messages', function () {
        home.UsernameErrorMes();
    })
    // Wrong-Input
    it('Wrong-error-messages', function () {
        home.WroongErrorMes();
    })

    it('Username-forgot-click', function () {
        home.usernameFrgClk();
    })

    it('Password-forgot-click', function () {
        home.passFrgClk();
    })
})
