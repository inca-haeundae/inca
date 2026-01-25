const openBtn = document.getElementById('openFormButton');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeModalButton');

function openModal() {
  modalOverlay.style.display = 'flex';
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// 연락처 자동 하이픈
const phoneInput = document.getElementById('phoneInput');

function formatPhone(value) {
  const numbers = value.replace(/[^0-9]/g, '');
  if (numbers.length < 4) return numbers;
  if (numbers.length < 8) return numbers.slice(0, 3) + '-' + numbers.slice(3);
  return (
    numbers.slice(0, 3) +
    '-' +
    numbers.slice(3, 7) +
    '-' +
    numbers.slice(7, 11)
  );
}

phoneInput.addEventListener('input', () => {
  phoneInput.value = formatPhone(phoneInput.value);
});
