const service= browser.runtime.connect({name:"currentWindowURL"});
service.postMessage({currentWindowURL: document.URL});
