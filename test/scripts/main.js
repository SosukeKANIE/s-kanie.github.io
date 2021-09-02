let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
	myImage.setAttribute('src','images/firefox-icon2.png');
    }else{
	myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please input your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Moziila is excellent, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is excellent, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}
