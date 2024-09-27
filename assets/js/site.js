// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("ModalBtn");

// Get the <span> element that closes the modal
const span = document.querySelector('.close');

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.classList.add("show");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.remove("show");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
}