JSON.parse(localStorage.getItem('cardBasket')).forEach(({ title, price, count, id }) => { 
  let imgUrl; 
  if (title === 'Jaws') imgUrl = './static/bookImg2.jpg';
  if (title === 'Kačer Donald Vs. Batman : The Dark menace') imgUrl = './static/bookImg4.jpg';
  if (title === 'Harry Potter: Prisoner of Azkaban') imgUrl = './static/bookImg3.jpg';
  if (title === 'Marťan') imgUrl = './static/bookImg.jpg'; 
  const target = document.getElementsByClassName('summary-items')[0];
  const mainDiv = document.createElement('div');
  console.log(target.childNodes);
  mainDiv.setAttribute('class', 'summary-row"');
  mainDiv.setAttribute('id', id);
  mainDiv.setAttribute('style', "display: flex")
  mainDiv.innerHTML = `
    <div class="summary-item summary-column">
        <img class="summary-item-image" src=${imgUrl} alt="book" width="100" height="100">
        <span class="summary-item-title">${title}</span>
    </div>
    <span class="summary-price summary-column">${price} Kč</span>
    <div class="summary-quantity summary-column">
        <input class="summary-quantity-input" type="number" id={id} value=${count} disabled>
    </div>
  `;
  target.appendChild(mainDiv);
});