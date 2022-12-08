var s = document.createElement('script');
s.src = chrome.runtime.getURL('inject.js');
s.onload = function() {
    console.log('Injected successfully!');
};
(document.head || document.documentElement).appendChild(s);
