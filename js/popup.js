'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let inputNames = ['show-aria-roles','show-alt-tags','show-type-attributes'],
        inputStorage = ['show-aria-roles-localstorage','show-alt-tags-localstorage','show-type-attributes-localstorage'],
        inputLabels = ['ARIA roles','Alt tags','Type attributes'];

    
    inputNames.forEach((names, index) => {

    chrome.storage.local.get([`${inputStorage[index]}`], function(returned) {

        const label = inputLabels[index];

        document.getElementById(names).value =
            returned[names] === 'true' ?
            label : label;

        returned[`${inputStorage[index]}`] === 'true' ? document.getElementById(names).classList.add('active') :
        document.getElementById(names).classList.remove('active');

    });

    if (document.getElementById(names)) {

        //eventListener for Storage 
        document.getElementById(names).addEventListener('click', () => {


            console.log(names, 'names');

            if (document.getElementById(names).classList.contains('active')) {
                document.querySelector('body').classList.remove(names);
            }

            document.getElementById(names).classList.toggle('active');

            chrome.tabs.query({}, function(tabs) {

                // executeScript
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        code: `document.querySelector("body").classList.toggle("${names}");`
                    });
                }

                //insert CSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/styles.css'
                    });
                }

            });

            //Get Storage
            chrome.storage.local.get([`${inputStorage[index]}`], function(returned) {

                const label = inputLabels[index];

                if (returned[`${inputStorage[index]}`] === 'true') {
                    chrome.storage.local.remove([`${inputStorage[index]}`]);
                    label;
                    chrome.tabs.executeScript({
                        code: `document.querySelector("body").classList.remove("${names}");`
                    });
                } else {
                    chrome.storage.local.set({
                        [inputStorage[index]]: 'true',
                    });
                    chrome.tabs.executeScript({
                        code: `document.querySelector("body").classList.add("${names}");`
                    });
                    label;
                }
                document.getElementById(names).value = label;
            });
        });

    }
 
})
    
});
