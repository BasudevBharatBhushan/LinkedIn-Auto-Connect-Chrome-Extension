console.log("content.js loaded");

// Listen for a message from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message from background.js:", message);

  if (message.action === "start") {
    // Find and click all connect buttons on the page
    var connectButtons = document.querySelectorAll(
      ".artdeco-button--2.artdeco-button--secondary"
    );
    console.log("Found " + connectButtons.length + " connect buttons.");

    connectButtons.forEach((button) => button.click());

    sendResponse({ success: true });
  } else {
    console.log("No action specified.");
  }
});
