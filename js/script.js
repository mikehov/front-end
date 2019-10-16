//******** UTILS.JS CHEATSHEET BY MIKE HOVENIER ********//

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

function hamburger() {
    document.querySelector("nav ul").classList.toggle("popnav");
    console.log('Navigatie klik');
}

document.querySelector(".hamburger").addEventListener("click", hamburger);


console.log('Script werkt');
