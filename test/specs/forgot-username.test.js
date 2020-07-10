import forgotUsername from '../pages/forgot-username.page';
import exp from '../expected/forgot-username.exp';

describe('Forgot-username', function () {

    it('Container-background', function () {
        forgotUsername.openForgotUsername()
        forgotUsername.containerBg();
    })

    it('Connections-text', function () {
        forgotUsername.connText();
    })

    it('Connections-color', function () {
        forgotUsername.connColor();
    })

    it('Connections-size', function () {
        forgotUsername.connSize();
    })

    it('Recover-username-text', function () {
        forgotUsername.recoverText(exp.recoverText);
    })

    it('Recover-text-color', function () {
        forgotUsername.recoverColor();
    })

    it('Recover-text-size', function () {
        forgotUsername.recoverSize();
    })

    it('Line-is-displayed', function () {
        forgotUsername.hrLine();
    })

    it('Line-is-color', function () {
        forgotUsername.hrLineColor();
    })

    it('Line-is-height', function () {
        forgotUsername.hrLineHeight();
    })

    it('User-name-required', function () {
        forgotUsername.mainLabel();
    })

    it('Required-text-color', function () {
        forgotUsername.requiredColor();
    })

    it('Input-max-width', function () {
        forgotUsername.userNameInput();
    })

    it('Input-ico-size', function () {
        forgotUsername.userNameSvg();
    })

    it('Forgot-password-text', function () {
        forgotUsername.forgotPass();
    })

    it('Forgot-password-link', function () {
        forgotUsername.forgotPassLink();
    })

    it('Forgot-password-color', function () {
        forgotUsername.forgotPassColor();
    })

    it('Back-to-login-batton-text', function () {
        forgotUsername.btnText(exp.BackToLogin, 0);
    })

    it('Back-to-login-batton-text-color', function () {
        forgotUsername.btnTextColor(0);
    })

    it('Back-to-login-batton-color', function () {
        forgotUsername.btnColor(0);
    })

    it('Back-to-login-batton-value', function () {
        forgotUsername.value(exp.BackToLoginValue, 0);
    })

    it('Recover-username-batton-text', function () {
        forgotUsername.btnText(exp.recoverBtn, 1);
    })

    it('Recover-username-batton-text color', function () {
        forgotUsername.btnTextColor(1);
    })

    it('Recover-username-batton-color', function () {
        forgotUsername.btnColor(1);
    })

    it('Recover-username-batton-value', function () {
        forgotUsername.value(exp.recoverBtnValue, 1);
    })
    //Functionality
    it('Forgot-password-click', function () {
        forgotUsername.forgotMyPassClick();
    })

    it('Back-to-login-click', function () {
        forgotUsername.backToLoginBtnClick();
    })

    it('Empty-continue-click', function () {
        forgotUsername.emptyContinueClick();
    })

    it('Alert-svg-size', function () {
        forgotUsername.allertSvgSize();
    })

    it('Alert-svg-color', function () {
        forgotUsername.allertSvgClr();
    })

    it('Recover-batton-click', function () {
        forgotUsername.recoverClick();
    })
    //Finish 
    it('Container-background', function () {
        forgotUsername.containerBg();
    })

    it('Connections-text', function () {
        forgotUsername.connText();
    })

    it('Connections-color', function () {
        forgotUsername.connColor();
    })

    it('Connections-size', function () {
        forgotUsername.connSize();
    })

    it('Recover-username-sent-text', function () {
        forgotUsername.forgotText(exp.recoverText);
    })

    it('Recover-username-text-color', function () {
        forgotUsername.forgotColor();
    })

    it('Recover-username-text-size', function () {
        forgotUsername.forgotSize();
    })

    it('Line-is-displayed', function () {
        forgotUsername.hrLine();
    })

    it('Line-is-color', function () {
        forgotUsername.hrLineColor();
    })

    it('Line-is-height', function () {
        forgotUsername.hrLineHeight();
    })

    it('Mail-sended-text', function () {
        forgotUsername.connText(exp.mailSend, 1);
    })

    it('Mail-sended-color', function () {
        forgotUsername.connColor();
    })

    it('Mail-sended-size', function () {
        forgotUsername.connSize();
    })

    it('User-name-required', function () {
        forgotUsername.mainLabel();
    })

    it('Required-text-color', function () {
        forgotUsername.requiredColor();
    })

    it('Input-max-width', function () {
        forgotUsername.userNameInput();
    })

    it('Input-ico-size', function () {
        forgotUsername.userNameSvg();
    })

    it('Forgot-password-text', function () {
        forgotUsername.forgotPass();
    })

    it('Forgot-password-link', function () {
        forgotUsername.forgotPassLink();
    })

    it('Forgot-password-color', function () {
        forgotUsername.forgotPassColor();
    })

    it('Back-to-login-batton-text', function () {
        forgotUsername.btnText(exp.BackToLogin, 0);
    })

    it('Back-to-login-batton-text-color', function () {
        forgotUsername.btnTextColor(0);
    })

    it('Back-to-login-batton-color', function () {
        forgotUsername.btnColor(0);
    })

    it('Back-to-login-batton-value', function () {
        forgotUsername.value(exp.BackToLoginValue, 0);
    })
})
