var component = "";
let indexList = [];
function setupThemeCaption(value) {
  document.getElementById("location_name_ads_photo").innerText =
    value.location_name;
  document.getElementById("location_name_ads_default").innerText =
    value.location_name;
  document.getElementById("gate_number").innerText = value.gate_name;
  document.getElementById("caption-gate-photo").innerText = value.gate_caption;
  document.getElementById("caption-gate-default").innerText =
    value.gate_caption;
}

function setupAdvertising(advertising_type) {
  if (advertising_type === "DEFAULT") {
    document.getElementById("default-advertising").classList.remove("hidden");
    document.getElementById("photo-advertising").classList.add("hidden");
  } else {
    document.getElementById("default-advertising").classList.add("hidden");
    document.getElementById("photo-advertising").classList.remove("hidden");
  }
}

function toggleSection(section) {
  document.getElementById("section-IDLE__wrapper").classList.add("hidden");
  document.getElementById("section-BLOCK__wrapper").classList.add("hidden");
  document.getElementById("section-TRX__wrapper").classList.add("hidden");
  document.getElementById("section-OPENGATE__wrapper").classList.add("hidden");
  document.getElementById("section-LOADING__wrapper").classList.add("hidden");
  document.getElementById(`${section}`).classList.remove("hidden");
}

function toggleModalWarning(values) {
  values = values[0];
  document.getElementById("warning-error__modal").classList.remove("hidden");
  let wrapper = document.getElementById("warning-error__wrapper");
  component = wrapper.innerHTML;
  if (indexList.indexOf(values.id) < 0 && values.status === "UNRESOLVED") {
    indexList.push(values.id);
    component += `<div id="${values.id}" class="border bg-primary-10 shadow-lg p-4 w-full border-yellow-300 flex my-2 rounded-lg">
          <div class="text-center mx-1">
              <img src="http://localhost:3001/assets/img/error-warning.png" class="" alt="">
          </div>
          <div class="text-left text-info mx-1 text-3xl">
              <p class="my-3 font-inter-medium" style="font-size: 48px;">${values.message}</p>
          </div>
      </div>`;
    wrapper.innerHTML = component;
    console.log();
  } else if (
    indexList.indexOf(values.id) >= 0 &&
    values.status === "RESOLVED"
  ) {
    document.getElementById(`${values.id}`).remove();
    indexList.splice(indexList.indexOf(values.id), 1);
    alert("here?");
  } else {
    console.log(indexList.indexOf(values.id), values.status);
    alert("here? shouldnt here");
    // do nothing
  }
}
