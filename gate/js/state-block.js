function processRenderStateBlock(
  ICON,
  BGCOLOR,
  TITLE = "",
  MESSAGE = "",
  TITLE_COLOR = "info",
  MESSAGE_COLOR = "white"
) {
  let wrapper = document.getElementById("section-BLOCK__wrapper");
  let content = `<div class="bg-${BGCOLOR} text-center h-full py-5 w-full">
  <img src="${ICON}" class="h-2/5 mt-24 mb-5 mx-auto">
  <h1 class="font-black text-${TITLE_COLOR} text-4xl mt-12">${TITLE}</h1>
  <p class="font-bold text-${MESSAGE_COLOR} text-3xl mt-3">${MESSAGE}</p></div>`;
  wrapper.innerHTML = content;
}
