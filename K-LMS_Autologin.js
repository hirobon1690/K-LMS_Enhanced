// ==UserScript==
// @name         K-LMS AutoLogin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  K-LMS AutoLogin
// @author       You
// @match        https://lms.keio.jp/courses/26335
// @icon         https://www.google.com/s2/favicons?sz=64&domain=keio.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(String(location)=="https://lms.keio.jp/courses/26335"){
        window.location.href = "https://lms.keio.jp/login/saml";
    }
})();