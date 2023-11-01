function processRenderStateQRIS(values, ICON) {
  let wrapper = document.getElementById("section-QRIS__wrapper");
  let content = `<div class="px-1 py-5 grid grid-cols-3 mb-5 h-full">
  <div class="w-screen">
      <div class="grid grid-cols-3 h-content h-full gap-8">
          <div class=" shadow-lg h-full rounded-lg overflow-hidden bg-primary p-3">
              <div class="flex flex-col h-full justify-center justify-items-center w-full">
                  <img src="${values.image}" id="img-transaction_id__expired-member" class="w-3/4 mx-auto" alt="">
                  <div class="text-center text-dark mt-12 font-bold text-xl">
                      <p class="font-semibold">
                          Kode Transaksi :
                      </p>
                      <p class="font-black my-5 text-2xl">
                          ${values.transaction_id}
                      </p>
                      <p class="text-gray-500 text-sm">
                          Powered by Soul Parking
                      </p>
                  </div>
              </div>
          </div>
          <div class=" col-span-2 rounded-lg text-center shadow-lg overflow-hidden bg-primary px-8 pt-16 pb-5 mr-8">
              <div class="flex flex-col h-full justify-center justify-items-center w-full">
                  <div class="w-100 w-full text-center">
                      <img src="${ICON}" alt="error-member-img" class="mt-12 w-2/4 mb-5 mx-auto">
                  </div>
                  <div class=""><p class="pt-1 mt-12 mb-3 font-black text-7xl" style="color: #1C49EC;">Membership Kadaluarsa</p> </div>

                  <div>
                      <p class="font-semibold text-dark text-4xl">
                          Masa berlaku membership Anda habis. Silahkan hubungi petugas
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`;
  wrapper.innerHTML = content;
}
