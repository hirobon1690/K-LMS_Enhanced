// ==UserScript==
// @name         Box AutoLogin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Box AutoLogin
// @author       You
// @match        https://keio.account.box.com/login/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=box.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('btn-full-width')[0].click()
})();