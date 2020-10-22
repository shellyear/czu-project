let modal = document.getElementById("myModal");

// Get all buttons that opens the modal
const allButtons = document.getElementsByClassName('button');

// When the user clicks on the button, open the modal
for (i = 0; i < allButtons.length; i++) {
  
  const BookCard = allButtons[i].closest('article');

  const BookContent = BookCard.children[1];
  const BookTitle = BookContent.children[0].innerHTML;
  const BookPrice = BookContent.children[2].children[0].innerHTML;
  // console.log('Article', BookContent);
  console.log('Article title', BookPrice)

  allButtons[i].onclick = function() {
    modal.style.display = "block";
    const ModalContent = modal.children[0];
    const CreditCard = ModalContent.children[1];
    const Form = CreditCard.children[1];
    let FormTitle = Form.children[0];

    // set FormTitle to BookTitle
    FormTitle.innerHTML = BookTitle; 


    //set FormPrice to bookPrice
    let Price = Form.children[1].children[1];
    Price.value = BookPrice;
  }  
}


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}