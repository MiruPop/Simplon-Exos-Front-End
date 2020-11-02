'use strict';

import {
    miru,
    arraysNumber,
    newArraysNumber,
    fruitArray,
    mixedArray
} from './export.js'

let body = document.getElementsByTagName('body')[0]
let div = document.createElement('div')
let ul1 = document.createElement('ul')
let ul2 = document.createElement('ul')
let ul3 = document.createElement('ul')
let ul4 = document.createElement('ul')

div.innerText = miru;
for (var i=0; i<arraysNumber.length; i++){

    var li=document.createElement('li');

    ul1.appendChild(li);
    li.innerText=li.innerText + arraysNumber[i];
}
for (var i=0; i<newArraysNumber.length; i++){

    var li=document.createElement('li');

    ul2.appendChild(li);
    li.innerText=li.innerText + newArraysNumber[i];
}
for (var i=0; i<fruitArray.length; i++){

    var li=document.createElement('li');

    ul3.appendChild(li);
    li.innerText=li.innerText + fruitArray[i];
}
for (var i=0; i<mixedArray.length; i++){

    if (i!=4) {
        var li=document.createElement('li');

        ul4.appendChild(li);
        li.innerText=li.innerText + mixedArray[i];
    }
    else {
        var li=document.createElement('li');

        ul4.appendChild(li);
        li.innerText=li.innerText + mixedArray[4].firstName + " " + mixedArray[4].lastName;
    }

};

body.appendChild(div)
body.appendChild(ul1)
body.appendChild(ul2)
body.appendChild(ul3)
body.appendChild(ul4)