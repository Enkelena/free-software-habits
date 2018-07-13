﻿
//gets software list from const variable declared in data.js
let alternativeApps = localSoftwareList['softwareList'];

//gets software list from server (github)
fetch('https://cdn.rawgit.com/Enkelena/gsoc-project/master/alternativeApps.json')
  .then( response => response.json() )
  .then(function(remoteSoftwareList) {
    const localListDate = new Date(localSoftwareList.modified);
    const remoteListDate = new Date(remoteSoftwareList.modified);
    //if modified date is newer, it uses the list from server
    if (localListDate < remoteListDate) {
        alternativeApps = remoteSoftwareList['softwareList'];
    }
  });

function updateCurrentUrl() {
    function logTabs(tabs) {
        if(tabs[0].url) {
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
    let betterAlternative = null;
    alternativeApps.forEach((next, key) => {
        if(next.url[0] === currentUrl) {
            betterAlternative = next.alternatives[0].url
        }
    })
    return betterAlternative;
}

//-----------------------------------------------------
function onlyOnce() { 
   
    alternativeApps.forEach((next) => {
                
    if(next.url[0] === currentUrl) {
        
       sessionStorage.setItem("currentUrl",currentUrl);
        }   
               
})
}


function handleMessage(request) {
    //if notifications are paused don't show: return
    if (localStorage.getItem("notification") === "off") return;
    
    currentUrl = request.currentWindowURL;
    let betterAlternative = findBetterAlternative(currentUrl);

    onlyOnce();
       if(sessionStorage.getItem("currentUrl") === currentUrl)  return;

    //if currentURL === same domain, don't show
    //if currentURL === null, don't show
    // TODO function to update results page
   showNotification(currentUrl,betterAlternative) 
}
//---------------------------------------------------

function showNotification(currentURL, betterAlternative) {
     
    //we shouldn't show notification for settings page and empty pages
    //if it doesn't find an alternative return
    if (currentURL === 'about') return;
    if (!betterAlternative || !currentURL) return;
   // if (sessionStorage.getItem("currentUrl") === alternativeDomain) return; 
  

    //may need to change, when different software lives under same domain
    const currentDomain = currentURL.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];
    const alternativeDomain = betterAlternative.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];


    const message = `You are on: ${currentDomain} for better alternative use: ${alternativeDomain}`;

    browser.notifications.create({
        "type":"basic",
        "iconUrl":"f.svg",
        "title": "Free software habits",
        "message": message
    }); 


}


browser.runtime.onConnect.addListener( m => m.onMessage.addListener(handleMessage)); 

