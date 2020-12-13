if (document.readyState == 'loading')
{
  document.addEventListener('DOMContentLoaded', ready)
}
else{
  ready()
};

function ready(){
  var removeCartItemButtons = document.getElementsByClassName('btn-delete')
  // console.log(removeCartItemButtons)
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click',removeCartItem)
  }
  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change',quantityChanged)
  }



  function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    // let localCardBasket = JSON.parse(localStorage.getItem('cardBasket'));
    let total = 0;
    for (var i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i]
      let priceElement = cartRow.getElementsByClassName('cart-price')[0]
      let quantityElement = cartRow.getElementsByClassName('cart-quantity-input') [0]
      let price = parseFloat(priceElement.innerText.replace(' Kč',''))
      let quantity = quantityElement.value
      total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' Kč'
  };

  function quantityChanged(event) {
    var input = event.target;
    const itemId = Number(input.id);
    
    if (isNaN(input.value)) input.value = 1;
    else if (input.value <= 0)  {
      console.log('yes');
      let localStorageItems = JSON.parse(localStorage.getItem('cardBasket'));
      console.log('localStorageItems', localStorageItems)
      let newlocalStorageItems = localStorageItems.filter(el => {
        return el.id !== itemId;
      });

      localStorage.setItem('cardBasket', JSON.stringify(newlocalStorageItems));
      document.getElementById(itemId).remove();
    }
    updateCartTotal()
  };
};

function removeCartItem(event) {
  let itemId = event.target.id;
  const localStorageItems = JSON.parse(localStorage.getItem('cardBasket'));
  const newlocalStorageItems = localStorageItems.filter((item) => {
    if (item.id === itemId) {
      if (item.count === 1) {
        localStorageItems.filter(el => el.count-- !== 0);
      }
      return { ...item, count: item.count--}
    };
  });
  localStorage.setItem('cardBasket', JSON.stringify(newlocalStorageItems));

  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  updateCartTotal()
  updateCartTotal()
};


JSON.parse(localStorage.getItem('cardBasket')).forEach(({ title, price, count, id }) => { 
  let imgUrl; 
  if (title === 'Jaws') imgUrl = './static/bookImg2.jpg';
  if (title === 'Kačer Donald Vs. Batman : The Dark menace') imgUrl = './static/bookImg4.jpg';
  if (title === 'Harry Potter: Prisoner of Azkaban') imgUrl = './static/bookImg3.jpg';
  if (title === 'Marťan') imgUrl = './static/bookImg.jpg'; 
  const target = document.getElementsByClassName('cart-items')[0];
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('class', 'cart-row');
  mainDiv.setAttribute('id', id);
  mainDiv.innerHTML = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src=${imgUrl} alt="book" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value=${count} id=${id}>
        <button class="btn-delete" type="button" id=${id}>Odstranit z košíku</button>
    </div>
  `;
  target.appendChild(mainDiv);
});


