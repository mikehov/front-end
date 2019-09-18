//******** UTILS.JS CHEATSHEET BY MIKE HOVENIER ********//

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

function hamburger() {
    document.querySelector("nav ul") .classList.toggle("rowin");
}

document.querySelector(".hamburger").addEventListener("click", hamburger);
