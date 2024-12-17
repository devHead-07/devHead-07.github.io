function openModal(imageSrc, descriptionElement) {
  let modal = document.getElementById("modal");
  let modalImage = document.getElementById("modalImage");
  let modalDescription = document.getElementById("modalDescription");

  modal.style.display = "flex";
  modalImage.src = imageSrc;
  modalDescription.textContent = descriptionElement.textContent;
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}
