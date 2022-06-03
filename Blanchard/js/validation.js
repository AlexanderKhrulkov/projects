const validation = new JustValidate('#form', {
  errorFieldCssClass: 'just-validate-error-field',
  errorLabelStyle: {
    color: '#FF0000',
  },

  focusInvalidField: true,
  lockForm: true,
});

const telSelector = form.querySelector('input[type="tel"]');

validation
  .addField('#name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Как вас зовут?',
    },
    {
      rule: 'minLength',
      value: 1,
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Поле должно содержать не более 30 символов',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Укажите ваш телефон',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
      successMessage: 'Телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    document.querySelector('.just-validate-success-message').style.display = 'inline-block';

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
