// ==UserScript==
// @name         Keio.jp AutoSignOut
// @version      0.1
// @description  Keio.jp AutoSignOut
// @author       You
// @match        https://portal.keio.jp/koid/systemLogout*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=keio.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByTagName('a')[1].click();
})();
