document.querySelectorAll(".heartButton").forEach((button) => {
  button.addEventListener("click", function () {
    const heartCountBadge = document.getElementById("heartCount");
    heartCountBadge.innerText = parseInt(heartCountBadge.innerText) + 1;
  });
});

document.querySelectorAll(".copyNumber").forEach((button) => {
  button.addEventListener("click", function (e) {
    const phoneNumber =
      e.target.parentNode.parentNode.querySelector(".phoneNumber").innerText;
    navigator.clipboard.writeText(phoneNumber);
    const copyCount = document.getElementById("copyCount");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
    alert("Number copied to your clipboard");
  });
});

document.querySelectorAll(".callNumber").forEach((button) => {
  button.addEventListener("click", function (e) {
    const getCoinElement = document.getElementById("coinCount");
    const getCoin = parseInt(getCoinElement.innerText);
    if (getCoin < 20) {
      alert("You need mininum 20 coins to call a number");
      return;
    } else {
      const numberName =
        e.target.parentNode.parentNode.querySelector(".numberName").innerText;
      const phoneNumber =
        e.target.parentNode.parentNode.querySelector(".phoneNumber").innerText;
      getCoinElement.innerText = getCoin - 20;
      appendToHistory(numberName, phoneNumber, new Date().toLocaleTimeString());
      alert(`📞 Calling ${numberName} - ${phoneNumber}`);
    }
  });
});

document.getElementById("clearHistory").addEventListener("click", function () {
  historyElement = document.getElementById("historyCards");
  historyElement.innerHTML = "";
});

function appendToHistory(name, number, time) {
  historyElement = document.getElementById("historyCards");
  newHistory = document.createElement(`div`);
  newHistory.innerHTML = `          <div
              class="historyCard bg-[#fafafa] rounded-lg p-4 flex justify-between items-center mb-2"
            >
              <div class="flex flex-col">
                <h1 class="inter font-semibold text-[18px]">
                ${name}
                </h1>
                <h2 class="hind-madurai text-[18px] text-[#5c5c5c]">${number}</h2>
              </div>
              <h1 class="hind-madurai text-[18px]">${time}</h1>
            </div>`;
  historyElement.appendChild(newHistory);
}
