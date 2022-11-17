// this variable exist in add_comment.js
// const profileNameElement = document.getElementsByClassName("myProfileName")[0];

const profileName = profileNameElement.textContent;
const addLocation = document.getElementsByClassName('profileName')[0];


function giveProfileName() {
    let createTagForName = document.createElement('span');
    createTagForName.innerHTML = profileName;
    createTagForName.style.fontSize = '14px';
    createTagForName.style.fontWeight = '600';
    createTagForName.style.color = 'rgb(38, 38, 38)';
    addLocation.appendChild(createTagForName)
}

giveProfileName();
