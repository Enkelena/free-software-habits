// on swapping tab update URL
function updateCurrentUrl() {
	function logTabs(tabs) {
		const tab = tabs[0]; // Safe to assume there will only be one result
		showNotification(tab.url);
	}
	function onError(err){
		showNotification(null);
	}
	browser.tabs.query({currentWindow: true, active: true}).then(logTabs, onError);
}
browser.tabs.onActivated.addListener(updateCurrentUrl);
browser.tabs.onUpdated.addListener(updateCurrentUrl);

//service is loaded into the page (getCurrentURL.js)
const service = browser.runtime.connect({name:"updateWindowURL"});
function handleMessage(request) {
    currentUrl = request.currentWindowURL;
    //if currentURL === same domain, don't show
    //if currentURL === null, don't show
    // TODO function to update results page
    showNotification(currentUrl);
}
browser.runtime.onConnect.addListener( m => m.onMessage.addListener(handleMessage) );

function showNotification(currentURL) {
    if (null) return;
    const url = currentURL || 'www.default.com';

    //may need to change, when different software lives under same domain
    const domain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];

    const message = `Changed to site: ${domain}`;
    browser.notifications.create({
        "type":"basic",
        "iconUrl":"f.svg",
        "title": "Free software habits",
        "message": message
    });
}
