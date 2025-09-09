chrome.runtime.onInstalled.addListener(() => {
  console.log("Bootcamp Helper instalado.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.msg === "ping") {
    console.log("Recebi um ping do popup!");
  }
});
