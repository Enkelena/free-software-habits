﻿function updateCurrentUrl() {
    function logTabs(tabs) {
        if(tab[0].url) {
            handleMessage(tabs[0].url);
        }
     }
    function onError(err){
        showNotification(null);
    }
    browser.tabs.query({currentWindow: true, active: true}).then(logTabs, onError);
} 
browser.tabs.onActivated.addListener(updateCurrentUrl);

//service is loaded into the page (getCurrentURL.js)
const service = browser.runtime.connect({name:"updateWindowURL"});

function findBetterAlternative(currentUrl) {
    console.log('AlternativeJS: ', alternativeApps)
    let betterAlternative
    alternativeApps.softwaresList.forEach((next, key) => {
        if(next.url[0] == currentUrl) {
            betterAlternative = next.alternatives[0].url
        }
    })
    return betterAlternative
}

function handleMessage(request) {
    currentUrl = request.currentWindowURL;
    let betterAlternative = findBetterAlternative(currentUrl);

    //if currentURL === same domain, don't show
    //if currentURL === null, don't show
    // TODO function to update results page
    showNotification(currentUrl, betterAlternative);
}
browser.runtime.onConnect.addListener( m => m.onMessage.addListener(handleMessage));

function showNotification(currentURL, betterAlternative) {
    console.log('Better Alternative ', betterAlternative)
    if (null) return;
    const url = currentURL || 'www.default.com';
    const alternativeURL = betterAlternative || 'www.default.com'

    //may need to change, when different software lives under same domain
    const currentDomain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];
    const alternativeDomain = alternativeURL.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];

    const message = `You are on: ${currentDomain} for better alternative use: ${alternativeDomain}`;

    browser.notifications.create({
        "type":"basic",
        "iconUrl":"f.svg",
        "title": "Free software habits",
        "message": message
    }); 
}
