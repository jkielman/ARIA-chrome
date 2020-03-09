'use strict';

chrome.storage.local.get(['toggle-display-localstorage'], function(returned) {
    if (returned['toggle-display-localstorage'] === 'true') {
        const headNew = document.getElementsByTagName('head')[0],
        src = document.createElement('script');
        src.src = chrome.extension.getURL('js/inject.js');
        headNew.appendChild(src);
        document.querySelector('body').classList.toggle('a11y');
    } else {
    	document.querySelector('body').classList.remove('a11y');
    }
});


