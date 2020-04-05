'use strict';

document.addEventListener('DOMContentLoaded', () => {

    var inputNames = ['show-aria-roles','show-alt-tags','show-type-attributes'],
        inputLabels = ['ARIA roles','Alt tags','Type attributes'],
        int = 0;


    inputNames.forEach(function(names) {

    chrome.storage.local.get([names+'-localstorage'], function(returned) {

        const label = inputLabels[int];

        int++;

        document.getElementById(names).value =
            returned[names] === 'true' ?
            label : label;

        returned[names+'-localstorage'] === 'true' ? document.getElementById(names).classList.add('active') :
        document.getElementById(names).classList.remove('active');

    });







    })


    const buttonOne = document.getElementById('show-aria-roles');

    if (buttonOne) {

        //Event for Storage 1
        buttonOne.addEventListener('click', () => {

            if (document.getElementById('show-aria-roles').classList.contains("active")) {
                document.querySelector('body').classList.remove('show-aria-roles');
            }

            buttonOne.classList.toggle('active');

            chrome.tabs.query({}, function(tabs) {

                //.executeScript
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        code: 'document.querySelector("body").classList.toggle("show-aria-roles");'
                    });
                }

                //.insertCSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/styles.css'
                    });
                }

            });


            chrome.storage.local.get(['show-aria-roles-localstorage'], function(returned) {
                const label = 'ARIA roles';
                if (returned['show-aria-roles-localstorage'] === 'true') {
                    chrome.storage.local.remove(['show-aria-roles-localstorage']);
                    label;
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.remove("show-aria-roles");'
                    });
                } else {
                    chrome.storage.local.set({
                        'show-aria-roles-localstorage': 'true',
                    });
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.add("show-aria-roles");'
                    });
                    label;
                }
                buttonOne.value = label;
            });
        });

    }


    const buttonTwo = document.getElementById('show-alt-tags');
    if (buttonTwo) {

        //Event for Storage 1
        buttonTwo.addEventListener('click', () => {

            if (document.getElementById('show-alt-tags').classList.contains("active")) {
                // document.getElementById('show-alt-tags').dispatchEvent(new Event('click'));
                document.querySelector('body').classList.remove('ally-alt-active');
            }

            buttonTwo.classList.toggle('active');

            chrome.tabs.query({}, function(tabs) {

                //.executeScript
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        code: 'document.querySelector("body").classList.toggle("show-alt-tags");'
                    });
                }

                //.insertCSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/styles.css'
                    });
                }

            });


            chrome.storage.local.get(['show-alt-tags-localstorage'], function(returned) {
                const label = 'Alt tags';
                if (returned['show-alt-tags-localstorage'] === 'true') {
                    chrome.storage.local.remove(['show-alt-tags-localstorage']);
                    label;
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.remove("show-alt-tags");'
                    });
                } else {
                    chrome.storage.local.set({
                        'show-alt-tags-localstorage': 'true',
                    });
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.add("show-alt-tags");'
                    });
                    label;
                }
                buttonTwo.value = label;
            });
        });

    }


//Button three

    const buttonThree = document.getElementById('show-type-attributes');
    if (buttonThree) {

        //Event for Storage 1
        buttonThree.addEventListener('click', () => {

            if (document.getElementById('show-type-attributes').classList.contains("active")) {
                document.querySelector('body').classList.remove('ally-type-active');
            }

            buttonThree.classList.toggle('active');

            chrome.tabs.query({}, function(tabs) {

                //.executeScript
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        code: 'document.querySelector("body").classList.toggle("show-type-attributes");'
                    });
                }

                //.insertCSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/styles.css'
                    });
                }

            });


            chrome.storage.local.get(['show-type-attributes-localstorage'], function(returned) {
                const label = 'Type attributes';
                if (returned['show-type-attributes-localstorage'] === 'true') {
                    chrome.storage.local.remove(['show-type-attributes-localstorage']);
                    label;
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.remove("show-type-attributes");'
                    });
                } else {
                    chrome.storage.local.set({
                        'show-type-attributes-localstorage': 'true',
                    });
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.add("show-type-attributes");'
                    });
                    label;
                }
                buttonThree.value = label;
            });
        });

    }
});
