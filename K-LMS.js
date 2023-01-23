// ==UserScript==
// @name         K-LMS Syllabus
// @version      0.1
// @author       hiroon1690
// @match https://lms.keio.jp/*
// @grant        none
// ==/UserScript==

(function () {
  const urls = {
    38408: 26177,
    38323: 22296,
    37198: 32786,
    39837: 26382,
    39493: 17413,
    39949: 31081,
    41888: 14031,
    42566: 22956,
    43771: 21266,
    13929: 98424,
    20613: 22349,
    16493: 12172,
    20791: 24538,
    19694: 35377,
    20944: 24303,
    20771: 27082,
    20537: 19810,
    18440: 19403,
    19693: 35396,
    13320: 9789,
    20832: 23460,
    36586: 27632,
    29840: 20029,
    35133: 35381,
    36557: 26784,
    36569: 26674,
    31935: 11692,
    27399: 38803,
    36338: 19403,
    35137: 35415,
    27063: 34171,
    36257: 7934,
    49056: 22148,
    47920: 32475,
    50557: 26158,
    49152: 30874,
    50583: 25261,
    53302: 22019,
    53279: 22535,
    53283: 21840,
    54498: 22133,
    54501: 22171,
  };
  ("use strict");
  let subjectnum = String(location).split("/").slice(-1)[0];
  let year = Number(
    document
      .getElementById("section-tabs-header-subtitle")
      .innerText.slice(0, 4)
  );
  let syllabusUrl =
    "https://gslbs.keio.jp/syllabus/detail?ttblyr=" +
    String(year) +
    "&entno=" +
    String(("00000" + urls[subjectnum]).slice(-5));
  try {
    let btn = document.getElementsByClassName("syllabus");
    btn[0].setAttribute("href", syllabusUrl);
  } catch (e) {
    let sidebar = document.getElementById("section-tabs");
    let li = document.createElement("li");
    li.className = "section";
    li.innerHTML =
      '<a href="' + syllabusUrl + '"class="modules" tabindex="0">Syllabus</a>';
    sidebar.appendChild(li);
  }
})();
