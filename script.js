function openModal(imageSrc, descriptionElement) {
  let modal = document.getElementById("modal");
  let modalImage = document.getElementById("modalImage");
  let modalDescription = document.getElementById("modalDescription");

  modal.style.display = "flex";  // Use flex to center content
  modalImage.src = imageSrc;
  modalDescription.textContent = descriptionElement.textContent; // Get the text content of the description element
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}
