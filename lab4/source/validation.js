'use strict';
let btnValidate = document.getElementById("btnValidate");
btnValidate.addEventListener('click', on_btnValidate_click_validate);

function on_btnValidate_click_validate() {
    var s = document.createElement("script");

    s.onload = function () {
        bootlint.showLintReportForCurrentDocument([]);
    };

    s.src = "https://maxcdn.bootstrapcdn.com/bootlint/latest/bootlint.min.js";
    document.body.appendChild(s);
}
