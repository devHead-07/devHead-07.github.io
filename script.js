function openModal(imageSrc, galleryItem) {
  let modal = document.getElementById('modal');
  let modalImage = document.getElementById('modalImage');
  let modalDescription = document.getElementById('modalDescription');

  let descriptionElement = galleryItem.querySelector('p');
  modal.style.display = 'flex';
  modalImage.src = imageSrc;
  modalDescription.textContent = descriptionElement.textContent;
}

function closeModal() {
  let modal = document.getElementById('modal');
  modal.style.display = 'none';
}
