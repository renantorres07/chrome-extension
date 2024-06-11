chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(['color', 'nightLight'], function(data) {
      if (data.color) {
        applyTheme(data.color);
      }
      if (data.nightLight) {
        enableNightLight();
      }
    });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'updateTheme') {
      if (request.color) {
        applyTheme(request.color);
      }
      if (request.nightLight !== undefined) {
        if (request.nightLight) {
          enableNightLight();
        } else {
          disableNightLight();
        }
      }
    }
  });
  
  function applyTheme(color) {
    chrome.theme.update({
      colors: {
        frame: color,
        toolbar: color,
        tab_background_text: '#ffffff'
      }
    });
  }
  
  function enableNightLight() {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.scripting.insertCSS({
          target: { tabId: tab.id },
          css: `
            html {
              filter: invert(90%) sepia(20%) hue-rotate(180deg);
            }
          `
        });
      });
    });
  }
  
  function disableNightLight() {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.scripting.insertCSS({
          target: { tabId: tab.id },
          css: `
            html {
              filter: none;
            }
          `
        });
      });
    });
  }
  