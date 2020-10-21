let modal = document.getElementById("myModal");

// Get all buttons that opens the modal
const allButtons = document.getElementsByClassName('button');

// When the user clicks on the button, open the modal
for (i = 0; i < allButtons.length; i++) {
  allButtons[i].onclick = function() {
    modal.style.display = "block";  
    console.log('modal', modal.children);
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