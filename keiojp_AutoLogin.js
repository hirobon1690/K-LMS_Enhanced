// ==UserScript==
// @name         Keio.jp AutoLogin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Keio.jp AutoLogin
// @author       You
// @match        https://auth.keio.jp/idp/profile/SAML2/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=keio.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('username').value='YOUR_MAIL@keio.jp';
    document.getElementById('password').value='YOUR_PASSWORD';
    document.getElementsByClassName('form-button')[0].click();
})();