'use strict';

// här skapar vi en function istället
function createProfileTable( title, text){
    var profileTable = document.createElement('div');
    var titleElement = document.createElement('h2');
    var textElement = document.createElement('p');
    var table = document.create.createElement('tbody');

    titleElement.innerHTML = title;
    textElement.innerHTML = text;
    profileTable.className = 'profile-table';

    profileTable.appendChild(titleElement);
    profileTable.appendChild(textElement);

    return profileTable;
}
