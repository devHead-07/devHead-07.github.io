function openModal(imageSrc) {
  let modal = document.getElementById('modal');
  let modalImage = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImage.src = imageSrc;
}
function closeModal() {
  let modal = document.getElementById('modal');
  modal.style.display = 'none';
}