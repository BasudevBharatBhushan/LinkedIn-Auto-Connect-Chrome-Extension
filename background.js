console.log("background.js loaded");

// Listen for a message from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // When the message is 'start', find and click all connect buttons on the page
  console.log(message);
  if (message === "start") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
    });
  } else {
    console.log("No background action");
  }
});
