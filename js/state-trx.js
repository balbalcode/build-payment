var globalInterval;
function processRenderTransaction(values) {
  if (values) {
    document.getElementById("parking-image").src = `${values.image}`;
    document.getElementById("time-in").innerText = values.time_in;
    document.getElementById("search-key").innerText = values.search_key;
    document.getElementById("vehicle").innerText =
      values.vehicle_code ?? "Tidak terdeteksi";
    document.getElementById("duration").innerText = values.total_hours;
    document.getElementById("parking-rate").innerText = values.parking_price;
    document.getElementById("parking-rate-overnight").innerText =
      values.overnight_price;
    document.getElementById("total-rate").innerText = values.amount;
    var timer = 0;
    if (values.timer && values.timer > 0) {
      timer = values.timer;
      document
        .getElementById("transaction-counter__wrapper")
        .classList.remove("hidden");
      globalInterval = setInterval(() => {
        timer = parseInt(timer) - 1;
        if (timer === 0) {
          forceClearInterval();
          window.location.href = "http://spn.gate.soulparking.co.id/";
        }
        document.getElementById("transaction-timer__wrapper").innerText = timer;
      }, 1100);
    } else {
      document
        .getElementById("transaction-counter__wrapper")
        .classList.add("hidden");
    }
  }
}

function forceClearInterval(){
  clearInterval(globalInterval)
}
