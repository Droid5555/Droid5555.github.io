const delayed_popup = document.querySelector(".delayed-popup");
const delayed_popup_content = document.querySelector(".delayed-popup__content");

delayed_popup.addEventListener('click', () => {
  delayed_popup.classList.add("hidden");
});

document.addEventListener('keyup', async function (action){
  if (action.key === 'Escape') {
    delayed_popup.classList.add("hidden");
  }
});


function showDelayedPopup() {
  if (localStorage.getItem("popup_shown") === "true") {
    return;
  }
  setTimeout(function () {
    delayed_popup.classList.remove("hidden");
    localStorage.setItem("popup_shown", "true");
  }, 3000);
}

// localStorage.setItem("popup_shown", "false");
showDelayedPopup();
