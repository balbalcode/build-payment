function processRenderStateLoading(
  LOGO = "http://localhost:3001/img/logo-outline.png",
  ICON = "http://localhost:3001/img/search.png",
  TITLE="",
  MESSAGE=""
) {
  let wrapper = document.getElementById("section-LOADING__wrapper");
  let component = `<img src="${LOGO}" alt="error-member-img"
  class="w-2/12 -left-8 mt-16 bouncing mb-5 mx-auto company-image">
<img src="${ICON}" alt="error-member-img" class="w-2/12  -mt-24 mb-5 mx-auto">
<h1 class="font-black text-6xl mt-12" >${MESSAGE}</h1>
<h3 class="font-black text-3xl" >${TITLE}</h3>`;
  wrapper.innerHTML = component;
}
