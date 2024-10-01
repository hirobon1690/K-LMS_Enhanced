// ==UserScript==
// @name        keio2024.okta.com auto login
// @namespace   Violentmonkey Scripts
// @match       https://keio2024.okta.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/10/1 18:16:35
// ==/UserScript==

(function() {
  'use strict';
  setTimeout(function() {
        let emailInput = document.getElementById('input28');
        let loginButton = document.getElementsByClassName('button-primary')[0];

        if (emailInput && loginButton) {
            emailInput.value = 'YOUR_EMAIL@keio.jp';

            emailInput.dispatchEvent(new Event('input', { bubbles: true }));
            emailInput.dispatchEvent(new Event('change', { bubbles: true }));
            emailInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
            emailInput.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));

            loginButton.click();
        }
    }, 500);
  setTimeout(function() {
        let passwordInput = document.getElementById('input53');
        let loginButtonPassword = document.getElementsByClassName('button-primary')[0];

        if (passwordInput && loginButtonPassword) {
            passwordInput.value = 'YOUR_PASSWORD'; 

            passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
            passwordInput.dispatchEvent(new Event('change', { bubbles: true }));
            passwordInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
            passwordInput.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));

            loginButtonPassword.click();
        }
    }, 1500);
})();
