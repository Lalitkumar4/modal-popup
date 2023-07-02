const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log(event.target);
  }
});
