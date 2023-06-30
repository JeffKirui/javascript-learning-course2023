function handleCostKeyDown (event) {        
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  // Reset all previous messages.
  document.querySelector('.js-total-cost')
  .innerHTML = '';
  document.querySelector('.js-error-message')
  .innerHTML = '';

  if (cost < 0) {
    document.querySelector('.js-error-message')
      .innerHTML = 'Error: cost cannot be less than $0';
    // When displaying an error, we can use return to
    // end this function immediately.
    return;
  }

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

function subscribe () {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
  }