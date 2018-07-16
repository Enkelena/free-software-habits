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
    function onError(){
        showNotification(null);
    }
    browser.tabs.query({currentWindow: true, active: true}).then(logTabs, onError);
} 
browser.tabs.onActivated.addListener(updateCurrentUrl);

//service is loaded into the page (getCurrentURL.js)
const service = browser.runtime.connect({name:"updateWindowURL"});

function findBetterAlternative(currentUrl) {
    let betterAlternative = null;
    alternativeApps.forEach((next) => {

        //test if the notification has been shown for that specific entry
        //* the list of software is loaded everytime we start the browser
        //* and the items won't have the shown attribute set, we just set it dinamically during runtime
        //* and when the browser restarts (new session) it gets cleared
        //* so we won't have to maintain a separate list
        if(!next.shown && next.url[0] === currentUrl) {
            betterAlternative = next.alternatives[0].url
            next['shown'] = true;
        }
    })
    return betterAlternative;
}

function findSecondAlternative() {
    let secondAlternative = null;
    alternativeApps.forEach((next) => {

    if(next.url[0] === currentUrl) { 
      secondAlternative = next.alternatives[1].url
    }
    })
    return secondAlternative;
    }

function handleMessage(request) {
    //if notifications are paused don't show: return
    if (localStorage.getItem("notification") === "off") return;
    
    //get list of software alternatives
    currentUrl = request.currentWindowURL;
    let betterAlternative = findBetterAlternative(currentUrl);
    let secondAlternative = findSecondAlternative();
    //if an alternative is returned show
    if (betterAlternative) {
        showNotification(currentUrl,betterAlternative,secondAlternative) 
    }
}

function showNotification(currentURL, betterAlternative,secondAlternative) {
    //we shouldn't show notification for settings page and empty pages
    //if it doesn't find an alternative return
    if (currentURL === 'about') return;
    if (!betterAlternative || !currentURL) return;
  
    //may need to change, when different software lives under same domain
    const currentDomain = currentURL.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];
    const alternativeDomain = betterAlternative.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];
    const secondDomain = secondAlternative.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];


    const message = `You are on: ${currentDomain} better alternatives: ${alternativeDomain}, ${secondDomain}`;

    browser.notifications.create({
        "type":"basic",
        "iconUrl":"f.svg",
        "title": "Free software habits",
        "message": message
    }); 
}


browser.runtime.onConnect.addListener( m => m.onMessage.addListener(handleMessage)); 

