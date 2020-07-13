import forgotPassword from '../pages/forgot-password.page'
import exp from '../expected/forgot-password.exp';

describe('Forgot-password', function () {

    it('Forgot-background', function () {
        forgotPassword.openForgotPass();
        forgotPassword.bgImage();
    })

    it('Container-background', function () {
        forgotPassword.containerBg();
    })

    it('Connections-text', function () {
        forgotPassword.connText();
    })

    it('Connections-color', function () {
        forgotPassword.connColor();
    })

    it('Connections-size', function () {
        forgotPassword.connSize();
    })

    it('Forgot-text-text', function () {
        forgotPassword.forgotText(exp.forgotText);
    })

    it('Forgot-text-color', function () {
        forgotPassword.forgotColor();
    })

    it('Forgot-text-size', function () {
        forgotPassword.forgotSize();
    })

    it('Line-is-displayed', function () {
        forgotPassword.hrLine();
    })

    it('Line-is-color', function () {
        forgotPassword.hrLineColor();
    })

    it('Line-is-height', function () {
        forgotPassword.hrLineHeight();
    })

    it('Tagline-text', function () {
        forgotPassword.taglineText(exp.taglineText);
    })

    it('Tagline-color', function () {
        forgotPassword.taglineColor();
    })

    it('Tagline-size', function () {
        forgotPassword.taglineSize();
    })

    it('Forgot-username-text', function () {
        forgotPassword.forgotUsername();
    })

    it('Forgot-username-link', function () {
        forgotPassword.forgotUsernameLink();
    })

    it('Forgot-username-color', function () {
        forgotPassword.forgotUsernameColor();
    })

    it('User-name-required', function () {
        forgotPassword.mainLabel();
    })

    it('Required-text-color', function () {
        forgotPassword.requiredColor();
    })

    it('Input-max-width', function () {
        forgotPassword.userNameInput();
    })

    it('Input-ico', function () {
        forgotPassword.userNameSvg();
    })

    it('Input-ico-size', function () {
        forgotPassword.userNameSvgSz();
    })

    it('Cancel-batton', function () {
        forgotPassword.btnIsDisplayed(0);
    })

    it('Cancel-batton-text', function () {
        forgotPassword.btnText(exp.cancelBtn, 0);
    })

    it('Cancel-batton-text-color', function () {
        forgotPassword.btnTextColor(0);
    })

    it('Cancel-background-color', function () {
        forgotPassword.btnColor(0);
    })

    it('Cancel-batton-value', function () {
        forgotPassword.value(exp.cancelBtnValue, 0);
    })

    it('Continue-batton', function () {
        forgotPassword.btnIsDisplayed(1);
    })

    it('Continue-batton-text', function () {
        forgotPassword.btnText(exp.continueBtn, 1);
    })

    it('Continue-batton-text color', function () {
        forgotPassword.btnTextColor(1);
    })

    it('Continue-background-color', function () {
        forgotPassword.btnColor(1);
    })

    it('Continue-batton-value', function () {
        forgotPassword.value(exp.continueBtnValue, 1);
    })

    //Functionality
    it('Cancel-button-click', function () {
        forgotPassword.cancelBtnClick();
    })

    it('Forgot-username-click', function () {
        forgotPassword.forgotMyUsernameClick();
    })

    it('Empty-continue-click', function () {
        forgotPassword.emptyContinueClick();
    })

    it('Alert-svg-size', function () {
        forgotPassword.allertSvgSize();
    })

    it('Alert-svg-color', function () {
        forgotPassword.allertSvgClr();
    })

    it('Continue-batton-click', function () {
        forgotPassword.continueClick();
    })
    
    //Finish 
    it('Container-background', function () {
        forgotPassword.containerBg();
    })

    it('Connections-text', function () {
        forgotPassword.connText();
    })

    it('Connections-color', function () {
        forgotPassword.connColor();
    })

    it('Connections-size', function () {
        forgotPassword.connSize();
    })

    it('Email-send-text-text', function () {
        forgotPassword.forgotText(exp.emailSend);
    })

    it('Email-send-text-color', function () {
        forgotPassword.forgotColor();
    })

    it('Email-send-text-size', function () {
        forgotPassword.forgotSize();
    })

    it('Email-send-is-displayed', function () {
        forgotPassword.hrLine();
    })

    it('Line-is-displayed', function () {
        forgotPassword.hrLine();
    })

    it('Line-is-color', function () {
        forgotPassword.hrLineColor();
    })

    it('Line-is-height', function () {
        forgotPassword.hrLineHeight();
    })

    it('Done-masseage-text', function () {
        forgotPassword.doneMsg();
    })

    it('Done-icon', function () {
        forgotPassword.doneSvg();
    })

    it('Done-icon-color', function () {
        forgotPassword.doneSvgColor();
    })

    it('Done-icon-size', function () {
        forgotPassword.doneSvgSize();
    })

    it('Second-line-is-displayed', function () {
        forgotPassword.hrLine(1);
    })

    it('Second-line-is-color', function () {
        forgotPassword.hrLineColor(1);
    })

    it('Second-line-is-height', function () {
        forgotPassword.hrLineHeight(1);
    })

    it('Not-receive-a-message-text', function () {
        forgotPassword.connText(exp.blueText, 1);
    })

    it('Not-receive-a-message-color', function () {
        forgotPassword.connColor();
    })

    it('Not-receive-a-message-size', function () {
        forgotPassword.connSize();
    })

    it('Tagline-text', function () {
        forgotPassword.taglineText(exp.taglineTextSend);
    })

    it('Tagline-color', function () {
        forgotPassword.taglineColor();
    })

    it('Tagline-size', function () {
        forgotPassword.taglineSize();
    })

    it('Resend-mail-link-color', function () {
        forgotPassword.resendMailColor();
    })

    it('Resend-mail-link-value', function () {
        forgotPassword.resendMailValue();
    })

    it('Back-to-login-batton', function () {
        forgotPassword.btnIsDisplayed(0);
    })

    it('Back-to-login-batton-text', function () {
        forgotPassword.btnText(exp.BackToLogin, 0);
    })

    it('Back-to-login-batton-text-color', function () {
        forgotPassword.btnTextColor(0);
    })

    it('Back-to-login-batton-color', function () {
        forgotPassword.btnColor(0);
    })

    it('Back-to-login-batton-value', function () {
        forgotPassword.value(exp.BackToLoginValue, 0);
    })
})
