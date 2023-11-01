function processRenderStateOpenGate(
  IMAGE,
  MESSAGE = "Jangan meninggalkan Tiket/Kartu dan barang berharga didalam kendaraan",
  TITLE = "Berhasil Masuk",
  ICON = "http://localhost:3001/img/success-gate.png"
) {
  let img = "";
  let wrapper = document.getElementById("section-OPENGATE__wrapper");
  for (let index = 0; index < IMAGE.length; index++) {
    img += `<img src="${IMAGE[index]}" class="my-2 w-full rounded" />`;
  }
  let content = `<div class="px-1 py-5 grid grid-cols-3  h-full">
            <div class="w-screen">
                <div class="grid grid-cols-3 h-content  h-full gap-8">
                    <div class=" shadow-lg h-full rounded-lg overflow-hidden bg-success p-3">
                        <div class="flex flex-col h-full justify-center justify-items-center w-full">
                            <div class="text-left text-white font-bold text-xl">
                                Kamera <span id="location_name_cam_conven">NAMA LOKASI</span>
                            </div>
                            <div id="image-capture__list" class="w-full">${img}</div>
                        </div>
                    </div>
                    <div class=" col-span-2 rounded-lg text-center shadow-lg overflow-hidden bg-success px-8 pt-16 pb-5 mr-8">
                        <div class="flex flex-col h-full justify-center justify-items-center w-full">
                            <div class="w-1/2 mx-auto">
                                <img src="${ICON}" class="w-3/4 mx-auto" alt="">
                            </div>
                            <div class=""><p class="pt-1 mt-12 mb-3 text-5xl font-black">${TITLE}</p></div><div>
                                <p class="font-semibold text-xl" id="message_gate_open">${MESSAGE}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  wrapper.innerHTML = content;
}
