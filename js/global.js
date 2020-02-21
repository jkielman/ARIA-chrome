
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.ib, {
        code: 'document.querySelector("body").classList.toggle("a11y")'
    });
});
