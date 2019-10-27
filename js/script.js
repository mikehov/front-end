//******** UTILS.JS CHEATSHEET BY MIKE HOVENIER ********//

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

console.log('Script werkt.');


function hamburger() {
    document.querySelector("nav ul").classList.toggle("popnav");
    console.log('Navigatie klik');
}

document.querySelector(".hamburger").addEventListener("click", hamburger);


function filterFunctie() {
    document.querySelector(".filterknop .filter").classList.toggle("filteractive");
    document.querySelector("");
    console.log('button klik');
}

document.querySelector(".filterknop button").addEventListener("click", filterFunctie);



