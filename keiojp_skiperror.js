// ==UserScript==
// @name         Keio.jp SkipError
// @version      0.1
// @description  Keio.jp SkipError
// @author       You
// @match        https://auth.keio.jp/idp/profile/Authn/SAML2/POST/SSO*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=keio.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByTagName('a')[1].click();
})();
