document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("connectButton")
    .addEventListener("click", function () {
      console.log("Sending message to background.js");
      console.log(chrome.runtime);
      chrome.runtime.sendMessage({
        action: "start",
      }),
        function (response) {
          if (!response.success) {
            console.log("Error: " + response.error);
          }
        };
    });
});

console.log("popup.js loaded");
