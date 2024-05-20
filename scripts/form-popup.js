const form_popup = document.querySelector(".form");
const submit_button = document.querySelector(".form__button_submit");
const reset_button = document.querySelector(".form__button_reset");
const form_button = document.querySelector(".footer__form-button");
const form_title = document.querySelector(".form__title")

form_button.addEventListener('click', async function hide() {
  form_popup.classList.remove("hidden");
})

submit_button.addEventListener('click', function submit(evt) {
  getFormValues();
  evt.preventDefault();
});


//Closing listeners
document.addEventListener('click', async function (action) {
  if (action.target === form_popup) {
    form_popup.classList.add("hidden");
  }
})

document.addEventListener('keyup', async function (action) {
  if (action.key === 'Escape') {
    form_popup.classList.add("hidden");
  }
})

const error_popup = document.querySelector(".error-popup");
const error_popup_text = document.querySelector(".error-popup__content_text");

async function getFormValues() {
  const phone_num = document.querySelector(".form__item_el_phone-num").value;
  const email = document.querySelector(".form__item_el_email").value;
  const feedback = document.querySelector(".form__item_el_feedback").value;

  if (!isPhoneValid(phone_num)) {
    showErrorPopup("Неправильный формат телефонного номера!");
    return;
  } else if (!isEmailValid(email)) {
    showErrorPopup("Неправильный формат электронной почты!");
    return;
  } else if (!isFeedbackValid(feedback)) {
    showErrorPopup("Неправильный текст фидбека! " +
      "Можно только писать на кириллице со всякими разными символами!");
    return;
  }

  form_title.textContent = "Отправляю в космос!...";
  submit_button.classList.add('disabled');
  reset_button.classList.add('disabled');
  submit_button.setAttribute('disabled', true);
  reset_button.setAttribute('disabled', true);
  setTimeout(async function () {
    await sendData("").catch((err) => {
      console.error(err);
      submit_button.classList.remove('disabled');
      reset_button.classList.remove('disabled');
      submit_button.removeAttribute('disabled');
      reset_button.removeAttribute('disabled');
      form_title.textContent = "ОШИБКА!";
    }).then((value) => {
      submit_button.classList.remove('disabled');
      reset_button.classList.remove('disabled');
      submit_button.removeAttribute('disabled');
      reset_button.removeAttribute('disabled');
      form_title.textContent = "Всё ок)";
    });
  }, 3000);
}

function isPhoneValid(phone_num) {
  return /^(\+7|8)\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone_num) || /^(\+7|8)[0-9]{10}$/.test(phone_num);
}

function isEmailValid(email) {
  return /^[a-zA-Z0-9\-.]*@[a-zA-Z0-9\-.]*.[a-zA-Z]*$/.test(email);
}

function isFeedbackValid(feedback) {
  return /^[а-яА-Я0-9.,?!:;\- ]*$/.test(feedback);
}

function showErrorPopup(text) {
  error_popup_text.textContent = text;
  error_popup.classList.remove("hidden");
}

async function sendData(data) {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data
  });
}

error_popup.addEventListener('click', () => {
  error_popup.classList.add("hidden");
});
