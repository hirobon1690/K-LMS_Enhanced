// ==UserScript==
// @name         Syllabus Link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://gslbs.keio.jp/syllabus/detail*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('h1_title')[0].innerHTML="<a href='https://gslbs.keio.jp/syllabus/search'>慶應義塾大学 シラバス・時間割</a>"
})();