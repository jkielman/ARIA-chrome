'use strict';

let inputNames = ['show-aria-roles','show-alt-tags','show-type-attributes'],
    inputStorage = ['show-aria-roles-localstorage','show-alt-tags-localstorage','show-type-attributes-localstorage'];

    inputNames.forEach(function(names, index) {

chrome.storage.local.get([`${inputStorage[index]}`], function(returned) {

    if (returned[`${inputStorage[index]}`] === 'true') {

        document.querySelector('body').classList.add(names);

        const inputBtn = document.getElementById(names);
        inputBtn ? document.getElementById(names).classList.add('active') : null;

    } else {

        const inputBtn = document.getElementById(names);
        inputBtn ? document.getElementById(names).classList.remove('active') : null;

    }

});

});








