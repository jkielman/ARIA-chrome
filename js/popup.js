'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //Storage on for 1

    chrome.storage.local.get(['show-aria-roles-localstorage'], function(returned) {

        const label = 'ARIA roles';
        document.getElementById('show-aria-roles').value =
            returned['show-aria-roles'] === 'true' ?
            label :
            label;

        if (returned['show-aria-roles-localstorage'] === 'true') {
            document.getElementById('show-aria-roles').classList.add('active');
        } else {
            document.getElementById('show-aria-roles').classList.remove('active');
        }

    });

    //Storage on for 2
    chrome.storage.local.get(['show-alt-tags-localstorage'], function(returned) {

        const label = 'Alt tags';
        document.getElementById('show-alt-tags').value =
            returned['show-alt-tags-localstorage'] === 'true' ?
            label :
            label;

        if (returned['show-alt-tags-localstorage'] === 'true') {
            document.getElementById('show-alt-tags').classList.add('active');
        } else {
            document.getElementById('show-alt-tags').classList.remove('active');
        }
    });

    //Storage on for 3
    chrome.storage.local.get(['show-type-attributes-localstorage'], function(returned) {

        const label = 'Type attributes';
        document.getElementById('show-type-attributes').value =
            returned['show-type-attributes-localstorage'] === 'true' ?
            label :
            label;

        if (returned['show-type-attributes-localstorage'] === 'true') {
            document.getElementById('show-type-attributes').classList.add('active');
        } else {
            document.getElementById('show-type-attributes').classList.remove('active');
        }
    });



    function callback() {
                if (chrome.runtime.lastError) {
                        console.log(chrome.runtime.lastError.message);
                }
    }




    const buttonOne = document.getElementById('show-aria-roles');

    if (buttonOne) {

        //Event for Storage 1
        buttonOne.addEventListener('click', () => {

            if (document.getElementById('show-aria-roles').classList.contains("active")) {
                // document.getElementById('show-aria-roles').dispatchEvent(new Event('click'));
                document.querySelector('body').classList.remove('ally-aria-active');
            }

            buttonOne.classList.toggle('active');

            chrome.tabs.query({}, function(tabs) {

                //.executeScript
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        code: 'document.querySelector("body").classList.toggle("ally-aria-active");'
                    }, callback);
                }

                //.insertCSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/styles.css'
                    }, callback);
                }

            });


            chrome.storage.local.get(['show-aria-roles-localstorage'], function(returned) {
                const label = 'ARIA roles';
                if (returned['show-aria-roles-localstorage'] === 'true') {
                    chrome.storage.local.remove(['show-aria-roles-localstorage']);
                    label;
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.remove("ally-aria-active");'
                    });
                } else {
                    chrome.storage.local.set({
                        'show-aria-roles-localstorage': 'true',
                    });
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.add("ally-aria-active");'
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
                        code: 'document.querySelector("body").classList.toggle("ally-alt-active");'
                    }, callback);
                }

                //.insertCSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/styles.css'
                    }, callback);
                }

            });


            chrome.storage.local.get(['show-alt-tags-localstorage'], function(returned) {
                const label = 'Alt tags';
                if (returned['show-alt-tags-localstorage'] === 'true') {
                    chrome.storage.local.remove(['show-alt-tags-localstorage']);
                    label;
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.remove("ally-alt-active");'
                    });
                } else {
                    chrome.storage.local.set({
                        'show-alt-tags-localstorage': 'true',
                    });
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.add("ally-alt-active");'
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
                // document.getElementById('show-type-attributes').dispatchEvent(new Event('click'));
                document.querySelector('body').classList.remove('ally-type-active');
            }

            buttonThree.classList.toggle('active');

            chrome.tabs.query({}, function(tabs) {

                //.executeScript
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        code: 'document.querySelector("body").classList.toggle("ally-type-active");'
                    }, callback);
                }

                //.insertCSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/styles.css'
                    }, callback);
                }

            });


            chrome.storage.local.get(['show-type-attributes-localstorage'], function(returned) {
                const label = 'Type attributes';
                if (returned['show-type-attributes-localstorage'] === 'true') {
                    chrome.storage.local.remove(['show-type-attributes-localstorage']);
                    label;
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.remove("ally-type-active");'
                    });
                } else {
                    chrome.storage.local.set({
                        'show-type-attributes-localstorage': 'true',
                    });
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.add("ally-type-active");'
                    });
                    label;
                }
                buttonThree.value = label;
            });
        });

    }
});
