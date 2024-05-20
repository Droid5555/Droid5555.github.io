// All images in gallery
const gallery_images = document.querySelectorAll('.gallery-item__item_image');

// Left-right arrows
const prev_button = document.querySelector(".gallery-popup__prev-button");
const next_button = document.querySelector(".gallery-popup__next-button");
const prev_button_icon = document.querySelector(".gallery-popup__prev-button_icon");
const next_button_icon = document.querySelector(".gallery-popup__next-button_icon");

//Popup elements
const gallery_popup_image = document.querySelector(".gallery-popup__content");
const gallery_popup = document.querySelector(".gallery-popup");


gallery_images.forEach((image) => {
  image.addEventListener('click', async function () {
    gallery_popup_image.src = image.src;
    gallery_popup_image.id = image.id;
    await checkArrows(gallery_popup_image);
    gallery_popup.classList.remove("hidden");
  })
});

//Gallery manager listeners
document.addEventListener('keyup', async function (action) {
  if (action.key === 'ArrowLeft' && !gallery_popup.classList.contains("hidden")) {
    await prevImage();
  }
  if (action.key === 'ArrowRight' && !gallery_popup.classList.contains("hidden")) {
    await nextImage();
  }
});

prev_button.addEventListener('click', async function() {
    await prevImage();
});

next_button.addEventListener('click', async function() {
  await nextImage();
})

// Gallery manager functions
async function checkArrows(image) {
  if (image.id === "#img" + 1) {
    next_button_icon.classList.remove('hidden');
    prev_button_icon.classList.add('hidden');
  } else if (image.id === "#img" + (gallery_images.length)) {
    next_button_icon.classList.add('hidden');
    prev_button_icon.classList.remove('hidden');
  } else {
    next_button_icon.classList.remove('hidden');
    prev_button_icon.classList.remove('hidden');
  }

}


async function prevImage() {
  if (Number(gallery_popup_image.id.match(/\d+/)[0]) !== 1) {
    let prev_image_id = Number(gallery_popup_image.id.match(/\d+/)[0]) - 1;
    gallery_popup_image.src = document.getElementById("#img" + prev_image_id).src;
    gallery_popup_image.id = "#img" + prev_image_id;
    await checkArrows(gallery_popup_image);
  }
}

async function nextImage() {
  if (Number(gallery_popup_image.id.match(/\d+/)[0]) !== gallery_images.length) {
    let next_image_id = Number(gallery_popup_image.id.match(/\d+/)[0]) + 1;
    gallery_popup_image.src = document.getElementById("#img" + next_image_id).src;
    gallery_popup_image.id = "#img" + next_image_id;
    await checkArrows(gallery_popup_image);
  }
}

//Closing listeners
document.addEventListener('click', async function (action) {
  if (action.target === gallery_popup) {
    gallery_popup.classList.add("hidden");
  }
})

document.addEventListener('keyup', async function (action) {
  if (action.key === 'Escape') {
    gallery_popup.classList.add("hidden");
  }
})
