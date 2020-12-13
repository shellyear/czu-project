

let cardBasket = [];
if (!localStorage.getItem('cardBasket')) {
  localStorage.setItem('cardBasket', JSON.stringify(cardBasket));
}

function onClickMenu(){
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("mobile-nav").classList.toggle("change");
};

/* {
  title: string,
  price: number,
  autor: string,
} */
function addToBasket(cardData) { 
  const { title, price } = cardData;
  console.log(title, price);
  const pastData = JSON.parse(localStorage.getItem('cardBasket'));
  // if (pastData) {} cardBasket = [...pastData];
  console.log('pastData', localStorage.getItem('cardBasket'));
  
  if (title, price) {
    console.log('cardBasket in condition', cardBasket);
    let exists  = cardBasket.filter(el => el.title === title).length;
    console.log('exists', exists);
    if (exists) {
      cardBasket = cardBasket.map(item => {
        if (item.title === title) {
          return { ...item, count: item.count+1};
        } else {
          return item;
        }
      });
    } else {
      console.log('id random', Math.random);
      console.log('first time');
      cardBasket = [...cardBasket, { ...cardData, count: 1, id: Math.random() }];
    };
  };
  const newData = JSON.stringify(cardBasket);

  localStorage.setItem('cardBasket', newData);
};