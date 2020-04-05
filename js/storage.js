'use strict';

chrome.storage.local.get(['show-aria-roles-localstorage'], function(returned) {

    if (returned['show-aria-roles-localstorage'] === 'true') {

        document.querySelector('body').classList.add('ally-aria-active');

        const switchOne = document.getElementById('show-aria-roles');
        if (switchOne) {
            document.getElementById('show-aria-roles').classList.add('active');
        }

    } else {

        const switchOne = document.getElementById('show-aria-roles');
        if (switchOne) {
            document.getElementById('show-aria-roles').classList.remove('active');
        }

    }

});

chrome.storage.local.get(['show-alt-tags-localstorage'], function(returned) {

    if (returned['show-alt-tags-localstorage'] === 'true') {

        document.querySelector('body').classList.add('ally-alt-active');

        const switchOne = document.getElementById('show-alt-tags');
        if (switchOne) {
            document.getElementById('show-alt-tags').classList.add('active');
        }

    } else {

        const switchOne = document.getElementById('show-alt-tags');
        if (switchOne) {
            document.getElementById('show-alt-tags').classList.remove('active');
        }

    }

});

chrome.storage.local.get(['show-type-attributes-localstorage'], function(returned) {

    if (returned['show-type-attributes-localstorage'] === 'true') {

        document.querySelector('body').classList.add('ally-type-active');

        const switchOne = document.getElementById('show-type-attributes');
        if (switchOne) {
            document.getElementById('show-type-attributes').classList.add('active');
        }

    } else {

        const switchOne = document.getElementById('show-type-attributes');
        if (switchOne) {
            document.getElementById('show-type-attributes').classList.remove('active');
        }

    }

});




