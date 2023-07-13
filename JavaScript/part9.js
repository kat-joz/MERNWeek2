'use strict'

// DOM

// DOCUMENT OBJECT MODEL

/*
    HTML (page)
        HEAD
            METADATA
        BODY
            HEADER
            DIV
            PARAGRAPH
            UL
                LI
                LI
                LI
                LI
*/

// DECLARE VARIABLES FROM THE DOM
const pageInput = document.getElementById('textInput');
const pageButton = document.getElementById('btn');
const pageParagraph = document.getElementById('textOutput');

let changeText =str=> pageParagraph.innerText = `${str}`;

// pageButton.onclick =()=> changeText(pageInput.value);

// ----------------

const pageList = document.getElementById('myList');

let addToList =(str)=> {

    let el = document.createElement('li');
    el.innerText = str;
    pageList.appendChild(el);

}

pageButton.onclick =()=> addToList(pageInput.value);
NB_JS_part9_2.js
'use strict'

// DECLARE VARIABLES FROM THE DOM
const pageInput = document.getElementById('textInput');
const pageButton = document.getElementById('btn');

//pageButton.onclick =()=> console.log(pageInput.value);

pageButton.onclick = function () {

    console.log(      pageInput.value     )

}

// -----------

const pageParagraph = document.getElementById('textOutput');

pageParagraph.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam error, voluptatibus quidem facere nihil tempore dolor, velit debitis odio quam iste eveniet quo illum aut. Qui adipisci natus nesciunt magni.';

// -------------------------------

const boldText = document.createElement('b');
// <b></b>

boldText.innerText = 'I am some bold text';
// <b>I am some bold text</b>

pageParagraph.appendChild(boldText);
// <p>Lorem, ipsum dolor .... <b>I am some bold text</b></p>

/*
const underlinedText = document.createElement('u');
underlinedText.innerText = 'I am some underlined text';
pageParagraph.append(boldText, underlinedText);
*/