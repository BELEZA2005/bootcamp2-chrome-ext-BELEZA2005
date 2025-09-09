document.getElementById("ping").addEventListener("click", () => {
  chrome.runtime.sendMessage({ msg: "ping" });
});
