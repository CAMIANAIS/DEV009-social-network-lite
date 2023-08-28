export const showConfirmationDialog = (message, callback) => {
  const modal = document.createElement('div');
  modal.className = 'create-post-modal';

  const content = document.createElement('div');
  content.className = 'modal-content';
  content.textContent = message; // Use the provided message
  // ... create and style the modal with the confirmation message ...

  const confirmButton = document.createElement('button'); // Use 'button' instead of 'btn'
  confirmButton.classList.add('btn');
  confirmButton.textContent = 'Confirm';
  const cancelButton = document.createElement('button'); // Use 'button' instead of 'btn'
  cancelButton.classList.add('btn');
  cancelButton.textContent = 'Cancel';

  confirmButton.addEventListener('click', () => {
    document.body.removeChild(modal);
    callback(true);
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modal);
    callback(false);
  });

  content.append(confirmButton, cancelButton);
  modal.append(content);
  document.body.appendChild(modal);
};
